# Market Requirements Document (MRD)

## Product Working Title
**AI Image Tool — Corporate Greeting Card Generator**

## Document Status
- Version: 0.1
- Date: May 31, 2026
- Status: Draft for validation

## 1. Executive Summary
AI Image Tool is a web-based product for professional companies to quickly create branded greeting cards and recognition posts for employees. It supports use cases such as birthdays, Employee of the Month (EOM), work anniversaries, onboarding, promotions, and custom celebrations.

The product allows an authorized company user to select a branded template, choose or upload an employee photo, add personalized details, and generate a polished social-media-ready card. Python-based face detection and image processing automatically identify, crop, align, and place the employee's face or portrait into the template placeholder.

## 2. Problem Statement
Companies regularly publish employee celebration posts, but the current workflow is often manual and inconsistent:
- Designers repeatedly edit the same templates.
- HR teams depend on design teams for simple changes.
- Employee photos may be poorly cropped or incorrectly positioned.
- Branding quality varies between posts.
- Creating cards for many employees takes unnecessary time.

Companies need a fast and repeatable way to create professional branded greeting cards without requiring image-editing expertise.

## 3. Product Vision
Enable companies to create professional, personalized, and brand-consistent employee celebration cards in minutes using reusable templates and automated photo placement.

## 4. Target Customers
### Primary Customers
- Small and medium-sized companies
- Corporate HR departments
- Internal communications teams
- Employer-branding teams
- Social media and marketing teams

### Secondary Customers
- Creative agencies managing multiple company accounts
- Event teams
- Schools, universities, clubs, and organizations with similar recognition needs

## 5. Target Users
| User Type | Primary Need |
| --- | --- |
| HR Executive | Generate cards quickly without waiting for a designer |
| HR Manager | Manage employee data, approvals, and recurring events |
| Social Media Manager | Download correctly sized branded posts for publishing |
| Designer / Brand Admin | Create and control approved templates |
| Company Admin | Manage users, branding, templates, and access permissions |

## 6. Core Use Cases
- Birthday greeting cards
- Employee of the Month (EOM) recognition
- Work anniversary cards
- Employee onboarding and welcome posts
- Promotion announcements
- Retirement and farewell cards
- Festival and holiday greetings
- Custom employee recognition campaigns

## 7. Value Proposition
### For Companies
- Reduce repetitive design work
- Maintain brand consistency
- Generate cards faster
- Scale employee engagement campaigns
- Centralize templates and employee information

### For Users
- No design expertise required
- Automatic portrait positioning
- Simple preview and approval flow
- Easy download for social media and internal channels

## 8. MVP Scope
### 8.1 Company Workspace
- Create a company account
- Upload company logo
- Configure basic brand details
- Invite authorized team members

### 8.2 Employee Management
- Add an employee manually
- Store employee name, designation, department, and photo
- Edit or archive employee records
- Select an employee while generating a card

### 8.3 Template Management
- Upload a card template
- Configure the employee-photo placeholder
- Configure text placeholders such as employee name, designation, and greeting message
- Configure company logo placement
- Categorize templates by event type
- Preview a template before use

### 8.4 AI-Assisted Photo Placement
- Detect whether a face is visible in the employee photo
- Crop and align the portrait automatically
- Resize and place the image into the configured template placeholder
- Preserve image quality where possible
- Warn the user when the uploaded image is unsuitable
- Allow basic manual position adjustment before final generation

### 8.5 Card Generation
- Select event type and template
- Select an employee or upload a one-time photo
- Enter or edit personalized text
- Preview the generated card
- Generate a high-quality PNG or JPG file
- Download the final card

### 8.6 Sharing Support
- Provide downloadable files optimized for common social channels
- Include a simple copy-caption action
- Track card generation history

> Direct automated posting to external social media platforms is a later-phase feature because it requires platform-specific APIs, permissions, and compliance review.

## 9. User Journey
1. User signs in to the company workspace.
2. User selects an occasion such as birthday or EOM.
3. User chooses an approved company template.
4. User selects an employee or uploads a photo.
5. The system detects, crops, aligns, and positions the portrait.
6. User edits the employee name, designation, message, or caption.
7. User reviews the card preview and adjusts the portrait if needed.
8. User generates the final image.
9. User downloads the card and shares it through the preferred channel.

## 10. Functional Requirements
### Priority Definitions
- **P0:** Required for MVP launch
- **P1:** Important shortly after MVP
- **P2:** Future enhancement

| Requirement | Priority |
| --- | --- |
| Secure login and company workspace separation | P0 |
| Employee record creation and editing | P0 |
| Template upload and event categories | P0 |
| Configurable photo and text placeholders | P0 |
| Face detection and automatic portrait fitting | P0 |
| Preview before generation | P0 |
| PNG/JPG export | P0 |
| Generated-card history | P0 |
| Manual portrait adjustment | P0 |
| Role-based access control | P1 |
| Bulk employee import through CSV | P1 |
| Scheduled greeting reminders | P1 |
| Multiple social-media output sizes | P1 |
| Approval workflow | P1 |
| Background removal | P1 |
| Bulk card generation | P1 |
| Direct social-media publishing | P2 |
| Analytics dashboard | P2 |
| AI-assisted greeting copy suggestions | P2 |
| Template marketplace | P2 |

## 11. Non-Functional Requirements
- The interface must be simple enough for non-designers.
- Generated images must maintain professional visual quality.
- Company data must remain isolated between workspaces.
- Original and generated images must be stored securely.
- The system must clearly request consent for employee-photo use.
- Processing failures must show understandable recovery guidance.
- Common card generation should complete within an acceptable interactive wait time.
- The platform should support future scale through background processing.

## 12. Privacy, Security, and Compliance Considerations
Employee photos are sensitive personal data. The product must:
- Obtain appropriate company and employee consent for photo usage.
- Explain whether face processing is used only for detection, cropping, and alignment.
- Avoid biometric identity matching unless it becomes an explicitly approved feature.
- Define retention and deletion rules for uploaded photos and generated cards.
- Allow employee records and images to be deleted.
- Restrict access using company-level roles and permissions.
- Use secure transport and secure storage in production.
- Review applicable privacy laws for target markets before launch.

## 13. Recommended Technology Direction
### Backend
- Python
- Django
- Django REST Framework
- PostgreSQL
- Celery and Redis for background image-processing jobs

### Image Processing
- Pillow for composition and export
- OpenCV for image manipulation
- MediaPipe or InsightFace for face detection and alignment
- Optional `rembg` integration for background removal

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form and Zod
- Framer Motion where useful

### Storage and Deployment
- Local media storage during initial development
- S3-compatible object storage for production
- CDN for generated image delivery when needed

## 14. Success Metrics
### MVP Metrics
- Median time required to generate one card
- Percentage of uploaded photos positioned successfully without manual correction
- Percentage of generated cards downloaded
- Number of active company workspaces
- Number of cards generated per company per month
- User-reported satisfaction with generated image quality

### Initial Targets to Validate
- Generate a standard card in under 2 minutes from template selection to download
- Achieve acceptable automatic portrait placement for at least 85% of suitable photos
- Reduce repetitive design-team effort for supported greeting-card use cases

## 15. Out of Scope for MVP
- Full graphic-design editor comparable to Canva
- Advanced AI image generation
- Biometric employee identification
- Automatic scraping of employee photos
- Direct publishing to every social platform
- Native mobile applications
- Marketplace billing and subscription automation

## 16. Risks and Mitigations
| Risk | Mitigation |
| --- | --- |
| Low-quality photos produce poor results | Validate uploads, warn users, and support manual adjustment |
| Face-processing expectations are unclear | Position the MVP as portrait detection and alignment, not identity recognition |
| Templates vary greatly | Define supported placeholder rules and template validation |
| Employee-photo privacy concerns | Add consent, deletion controls, access restrictions, and retention policies |
| Social APIs create integration complexity | Start with optimized downloads and add direct publishing later |

## 17. Open Questions
- Which geographic market will be targeted first?
- Should the first release support a single company or a multi-tenant SaaS model?
- Who creates templates: internal admins, company designers, or both?
- Is manual portrait adjustment required in the first prototype?
- Which export dimensions are most important for launch?
- Should the product store employee photos permanently or allow one-time uploads?
- Is an approval step required before a card can be downloaded?
- Is subscription billing required for the MVP?

## 18. Proposed Delivery Phases
### Phase 1: Prototype
- One sample template
- Photo upload
- Face detection and portrait fitting
- Name and message input
- Card preview and download

### Phase 2: MVP
- Authentication
- Company workspace
- Employee records
- Multiple reusable templates
- Placeholder configuration
- Card history
- Secure media handling

### Phase 3: Growth Features
- CSV import
- Multiple output sizes
- Approval workflows
- Reminders and scheduling
- Bulk card generation
- Background removal
- Analytics

### Phase 4: Advanced Integrations
- Direct social-media publishing
- AI-assisted caption suggestions
- Subscription billing
- Agency workspaces and template marketplace
