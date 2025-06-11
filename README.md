# Dealls Mentoring Feature - UI Automation Testing with Playwright

This repository contains UX automation scripts using [Playwright](https://playwright.dev/) to test the **Mentoring** feature recently added to the Dealls platform:  
🔗 [Mentoring Feature (Dev)](https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring)

---

## 🧪 Challenge Overview

This project was created as part of a technical assessment for a QA/SDET position.  
**Goal:** To demonstrate a solid test strategy and build automated test scripts for the new mentoring feature.

---

## ✅ What’s Included

- Automated tests for key user flows such as:
  - Logging in
  - Viewing mentor list
  - Viewing mentor profile/details
  - Booking a mentoring schedule (couldn't do it because many Mentor is full schedule)

---

## 🧠 Test Strategy (Summary)

**Types of Testing:**
- Functional Testing
- Cross-browser Testing (optional)
- Negative Testing (e.g., empty form submissions)

**Environment:**
- Testing is performed on the staging/dev environment:  
  `https://job-portal-user-dev-skx7zw44dq-et.a.run.app`

**Assumptions:**
- Test users already exist (valid email/password)
- Scheduling functionality is mockable or testable on dev
- No CAPTCHA or 2FA during login flow

---
