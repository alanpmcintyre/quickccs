# QuickCCS

Single-file HTML clinical decision support tool for HSE Common Conditions Service (CCS) consultations.

## Architecture
- Three logical scripts embedded in one HTML file:
  - `ccs-conditions`: condition/question data
  - `ccs-render`: UI rendering
  - `ccs-logic`: clinical decision logic
- Deployed to Netlify at quickccs.netlify.app

## Completed Modules
- Oral Thrush
- Conjunctivitis

## In Progress
- Vaginal/Vulvovaginal Thrush

## Key Rules
- Single-file constraint — no build step, no npm
- All logic must follow HSE CCS protocols exactly
- buildRecord() generates structured consultation output