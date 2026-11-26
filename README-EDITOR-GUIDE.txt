CBC THE CHRONICLE — REDESIGN V2
================================

WHAT IS INCLUDED
- index.html: Home page
- highlights.html: Latest stories and moderated reader responses
- submit.html: Student submission form
- faq.html: FAQ and student question form
- about.html: Mission, values, editorial principles, copyright and speech boundaries
- team.html: Editorial team profiles
- archive.html: Published story archive
- corrections.html: Corrections request form
- assets/style.css: Shared visual design
- data/articles.json: Published story cards
- data/team.json: Team profiles
- data/comments.json: Approved reader responses only
- articles/article-template.html: Copy this to create a story page

DESIGN
The redesign keeps the original warm-paper background, serif masthead, restrained green accents, and minimal newspaper / academic-journal feel.

IMPORTANT: FORM EMAIL ROUTING
The student submission form keeps the same FormSubmit recipient endpoint used by the existing live site. FAQ, corrections and moderated response forms use that same activated endpoint with distinct email subjects. After deployment, test each form using dummy content. Never put private student information into test submissions.

HOW EDITOR PUBLISHING WORKS
GitHub Pages is a static hosting service. It does not provide secure in-site editor accounts, database storage, or direct uploads by itself. This version uses GitHub repository access as the publishing permission system:
1. The owner invites each editor as a repository collaborator with the minimum required write permission.
2. Only authorized collaborators can add/edit site files in GitHub.
3. To publish a story, copy articles/article-template.html to a new file such as articles/2026-11-campus-update.html and edit it.
4. Add a matching entry to data/articles.json, for example:
   {"title":"Campus update","category":"Campus News","date":"Nov 27, 2026","excerpt":"A short summary.","url":"articles/2026-11-campus-update.html"}
5. Upload approved images to assets/ and reference them in the story page.
6. To add a team member, add an object to data/team.json, for example:
   {"name":"Editor Name","role":"Editor","bio":"A short approved biography.","photo":"assets/editor-name.jpg"}
7. To publish a reader response, first review it privately. Only after approval, add an object to data/comments.json, for example:
   {"byline":"A reader","date":"Nov 27, 2026","text":"An approved response."}

ROLE-BASED PERMISSIONS
The public website does not expose a login form because GitHub Pages cannot securely authenticate editors. Repository collaborator permissions are the access-control layer. For stronger editorial governance, configure GitHub branch protection / rulesets so changes to the live branch require a pull request and approval by the editor-in-chief. Keep editor access limited to trusted team members. Do not share GitHub passwords or personal access tokens.

COMMENT MODERATION
Reader responses are emailed to the editorial inbox and are not published automatically. Editors manually review and publish approved responses in data/comments.json. This provides a real moderation step without exposing an unmoderated public comment wall.

UPLOADS
Editors upload article images and portraits through GitHub's repository file interface. There is intentionally no public upload endpoint: a static site cannot safely accept and store files without a trusted backend.

BEFORE LAUNCH
- Review the About page with a school staff adviser / administration, especially policies involving student speech, privacy, minors and publication rights.
- Confirm the school approves the use of FormSubmit and the collection of student submissions.
- Test submission, FAQ, corrections and reader-response forms with dummy content.
- Add real team biographies only after each person approves the wording and portrait.
- Add real stories only after editorial review and source/permission checks.
- Do not publish personal contact details, private allegations, or sensitive information about students.

DEPLOYMENT
Upload the contents of this folder to the root of the GitHub Pages repository, replacing the existing site files only after reviewing and testing the new version. Keep a copy of the current working index.html as a backup.
