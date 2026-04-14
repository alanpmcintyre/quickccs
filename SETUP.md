# QuickCCS — Project Setup Guide

Getting the project into Cursor with Claude CLI and GitHub version control.

---

## 1. Create the GitHub Repo

- Go to [github.com](https://github.com) → **New repository**
- Name it `quickccs` (or similar)
- Set to **Private**, no template, no README
- Copy the remote URL

---

## 2. Set Up the Local Project

```bash
mkdir quickccs
cd quickccs
git init
git remote add origin https://github.com/YOUR_USERNAME/quickccs.git
```

Copy your HTML file into the folder and rename it:

```bash
mv QuickCCS_v2_4_72_question_consistency_fixed.html index.html
```

Commit and push:

```bash
git add .
git commit -m "initial commit: QuickCCS v2.4"
git branch -M main
git push -u origin main
```

---

## 3. Open in Cursor

- **File → Open Folder** → select your `quickccs` folder

---

## 4. Add a CLAUDE.md

Create a `CLAUDE.md` in the project root. This gives Claude Code persistent context about the project so you're not re-explaining every session.

```bash
touch CLAUDE.md
```

Paste in something like:

```markdown
# QuickCCS

Single-file HTML clinical decision support tool for HSE Common Conditions Service (CCS) consultations.

## Architecture
- Single HTML file — no build step, no npm, no bundler
- Three logical script sections embedded in the file:
  - `ccs-conditions`: condition/question data definitions
  - `ccs-render`: UI rendering functions
  - `ccs-logic`: clinical decision and routing logic
- Deployed to Netlify at quickccs.netlify.app

## Completed Modules
- Oral Thrush
- Conjunctivitis

## In Progress
- Vaginal/Vulvovaginal Thrush

## Key Rules
- Single-file constraint must be maintained — do not introduce external scripts or build steps
- All clinical logic must follow HSE CCS protocols exactly
- buildRecord() generates the structured consultation output shown on the result screen
- Any new condition module must follow the same three-section pattern as existing modules
```

Commit it:

```bash
git add CLAUDE.md
git commit -m "add CLAUDE.md project context"
git push
```

---

## 5. Start Claude Code CLI

In the Cursor terminal:

```bash
claude
```

Claude Code reads `CLAUDE.md` automatically at the start of each session.

---

## 6. Branching Pattern

The whole app is one file so keep branching simple — one branch per module or significant feature:

```bash
git checkout -b feature/vv-thrush

# do your work, then:
git add .
git commit -m "add VV thrush module"
git checkout main
git merge feature/vv-thrush
git push
```

This keeps `main` clean and gives you easy rollback points if a module breaks something.

---

## 7. Second Machine Sync

When moving to a different machine:

```bash
git clone https://github.com/YOUR_USERNAME/quickccs.git
cd quickccs
```

No install steps needed — it's a single HTML file.

-----------------------------------------------------------------------
The setup would be straightforward:

Create a GitHub repo (private makes sense for a clinical tool) and do an initial commit of the current QuickCCS files
Clone it locally on whichever machine you're starting from — Beelink or ThinkPad
Open in Cursor, create a CLAUDE.md with your architecture notes
Connect Netlify to the GitHub repo — swap from drag-and-drop to auto-deploy on push to main

That last step is worth doing. Once it's connected, your deploy workflow becomes just git push and Netlify picks it up automatically. Much cleaner than drag-and-drop, and you get deploy history with easy rollbacks if something breaks in production.
-------------------------------------------------------------------------------------------