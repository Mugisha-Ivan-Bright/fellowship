# Fellowship — Church Management Platform

## Overview

Fellowship is a digital church management platform built for local ADEPR (Association des Églises de Pentecôte au Rwanda) congregations. It enables church secretaries to digitize paper-based member records and gives church leaders real-time visibility into member participation, attendance, and dedications — replacing a manual, paper-driven system that collapsed when the Rwandan government consolidated churches into shared buildings per zone, causing members to drift away and leaders to lose track of their congregations.

## Goals

1. Let the church secretary enroll all existing members from paper records into a digital registry.
2. Organize members by their assigned Igihande (cell group) and track each group's leader.
3. Track member attendance at Sunday services, mid-week services, and special events.
4. Track member dedications (tithing, offerings, volunteering, service roles).
5. Give Igihande leaders visibility into their own group members and participation.
6. Give the church committee (Komite Nyobozi) a full overview of the congregation.
7. Support the church secretary as the primary data entry operator.

## Core User Flow

1. Secretary signs in to Fellowship.
2. Secretary enrolls members one by one from paper records — name, ID, phone, address, baptism date, photo, and Igihande assignment.
3. Secretary records attendance after each service or event.
4. Igihande leaders log in to view their group members and participation status.
5. Church leaders (Komite Nyobozi) access the full dashboard — total members, attendance trends, inactive members, and Igihande summaries.
6. Leaders identify members who have stopped attending and follow up.

## Church Structure (ADEPR Local Church)

The platform reflects the official ADEPR local church hierarchy:

```
Komite Nyobozi (Executive Committee)
├── Pasiteri (Pastor)
├── Umuyobozi ushinzwe Ibikorwa (Operations Leader)
├── Umunyamabanga (Secretary)  ← primary data entry role
├── Umubitsi (Treasurer)
└── Other committee members

Itsinda rya Protokole (Protocol Department)
└── Umuyobozi wa Protokole (Protocol Leader)

Amahande (Cell Groups — Igihande × N)
└── Each Igihande
    ├── Umuyobozi w'Igihande (Cell Group Leader)
    └── Abanyetorero (Members)
```

## Features

### Authentication & Roles

- Secure sign-in for all users.
- Role-based access: Secretary, Igihande Leader, Committee Member, Pastor/Admin.
- Each role sees only what is relevant to their responsibility.

### Member Enrollment (Secretary)

- Full enrollment form capturing: membership number (from paper), full name, national ID, phone, date of birth, home address (Province → District → Sector → Cell → Village), baptism date, marital status, Igihande assignment, and photo upload.
- Membership numbers from existing paper records are preserved.
- Members are searchable and filterable by name, Igihande, status, and location.

### Igihande Management

- Each Igihande has a name, a leader, and a list of assigned members.
- Leaders can view their group and see participation summaries.
- Secretary can create, edit, and reassign Igihande groups.

### Attendance Tracking

- Secretary or leader marks attendance per service or event.
- Services tracked: Sunday service, mid-week/prayer service, special events.
- Attendance history is visible per member and per Igihande.
- Dashboard flags members with low or no recent attendance.

### Participation & Dedications

- Leaders can record member dedications: tithing, offerings, volunteering, service roles.
- Dedication history is visible per member.

### Dashboard & Reports

- Church-wide stats: total members, active vs inactive, attendance rate, new enrollments.
- Per-Igihande breakdown: member count, attendance rate, leader contact.
- Inactive member list: members who have not attended in a defined period.

## Roles & Permissions

| Role | Access |
|---|---|
| Secretary | Full member enrollment, editing, attendance recording |
| Igihande Leader | View own group members and participation |
| Committee Member | Read-only access to full member list and dashboards |
| Pastor / Admin | Full access to all data and settings |

## Scope

### In Scope

- Authentication and role-based access
- Member enrollment and profile management
- Photo upload per member
- Igihande creation and member assignment
- Attendance tracking per service/event
- Dedication and participation recording
- Dashboard with key metrics
- Member search and filtering
- Inactive member identification
- Task manager Kanban (personal follow-up and work tasks)

### Task Manager (Kanban)

- A personal work and follow-up task manager for all authenticated users.
- Adapted from the existing Refine demo Kanban — same drag-drop structure, Fellowship context.
- Four stages: To Do → In Progress → Done → On Hold.
- Each task has a title, priority, optional due date, optional link to a related member, and optional assignee.
- Useful for: following up on inactive members, preparing for services, delegating committee work.
- Not a member tracking system — it is a productivity accessory for church leaders.

### Out of Scope

- Online giving / payment processing
- SMS or push notification system
- Mobile-native application (web only, mobile-responsive)
- Multi-church / multi-branch support (single local church for now)
- Public-facing church website

## Success Criteria

1. Secretary can enroll a member in under 2 minutes.
2. All existing paper records can be migrated into the system.
3. Leaders can view their Igihande group and attendance at a glance.
4. The committee can identify inactive members within seconds.
5. The system works reliably on a phone browser with a modest internet connection.
