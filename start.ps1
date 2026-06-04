<#
  Start both backend (Django) and frontend (Next.js) simultaneously.
  Auto-finds next available port if default is busy.
  Usage: .\start.ps1
#>

function Find-AvailablePort {
    param([int]$StartPort)
    $port = $StartPort
    while ($port -lt $StartPort + 100) {
        $listener = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
        if (-not $listener) { return $port }
        $port++
    }
    Write-Error "No available port found in range $StartPort-$($StartPort+99)"
    exit 1
}

$backendDefault = 8000
$frontendDefault = 3000

$backendPort = Find-AvailablePort -StartPort $backendDefault
$frontendPort = Find-AvailablePort -StartPort $frontendDefault

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  AI Image Tool - Starting Services" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Backend  -> http://localhost:$backendPort" -ForegroundColor Yellow
Write-Host "  Frontend -> http://localhost:$frontendPort" -ForegroundColor Yellow
Write-Host ""
Write-Host "  Press Ctrl+C to stop both." -ForegroundColor DarkGray
Write-Host ""

# Activate venv and start Django
$backendJob = Start-Job -ScriptBlock {
    param($root, $port)
    Set-Location "$root\backend"
    & "$root\backend\.venv\Scripts\python.exe" manage.py runserver "0.0.0.0:$port"
} -ArgumentList (Get-Location).Path, $backendPort

# Start Next.js dev server
$frontendJob = Start-Job -ScriptBlock {
    param($root, $port)
    Set-Location "$root\frontend"
    $env:PORT = $port
    & npm run dev
} -ArgumentList (Get-Location).Path, $frontendPort

try {
    while ($true) {
        # Stream backend output
        Receive-Job $backendJob -ErrorAction SilentlyContinue | ForEach-Object {
            Write-Host "[backend]  $_" -ForegroundColor Green
        }
        # Stream frontend output
        Receive-Job $frontendJob -ErrorAction SilentlyContinue | ForEach-Object {
            Write-Host "[frontend] $_" -ForegroundColor Magenta
        }

        # Check if either job failed
        if ($backendJob.State -eq 'Failed') {
            Write-Host "Backend crashed!" -ForegroundColor Red
            Receive-Job $backendJob
            break
        }
        if ($frontendJob.State -eq 'Failed') {
            Write-Host "Frontend crashed!" -ForegroundColor Red
            Receive-Job $frontendJob
            break
        }

        Start-Sleep -Milliseconds 500
    }
}
finally {
    Write-Host "`nShutting down..." -ForegroundColor DarkGray
    Stop-Job $backendJob, $frontendJob -ErrorAction SilentlyContinue
    Remove-Job $backendJob, $frontendJob -Force -ErrorAction SilentlyContinue
}
