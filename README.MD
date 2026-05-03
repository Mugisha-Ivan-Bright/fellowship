# Fellowship — Church Management Platform

<div align="center">

![Fellowship Logo](https://img.shields.io/badge/Fellowship-Church%20Management-1B6B3A?style=for-the-badge&logo=church&logoColor=white)

**A digital church management platform built for local ADEPR congregations in Rwanda**

[![Built with Refine](https://img.shields.io/badge/Built%20with-Refine-blue)](https://refine.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Ant Design](https://img.shields.io/badge/Ant%20Design-0170FE?logo=antdesign&logoColor=white)](https://ant.design/)
[![GraphQL](https://img.shields.io/badge/GraphQL-E10098?logo=graphql&logoColor=white)](https://graphql.org/)

</div>

## 🏛️ About Fellowship

Fellowship is a comprehensive church management platform designed specifically for local ADEPR (Association des Églises de Pentecôte au Rwanda) congregations. It enables church secretaries to digitize paper-based member records and provides church leaders with real-time visibility into member participation, attendance, and dedications.

The platform addresses the challenges faced when the Rwandan government consolidated churches into shared buildings per zone, causing members to drift away and leaders to lose track of their congregations.

## ✨ Features

### 👥 **Member Management**
- **Digital Member Registry**: Complete member enrollment from paper records
- **Member Profiles**: Name, ID, phone, address, baptism date, photo, and Igihande assignment
- **Search & Filter**: Find members by name, Igihande, status, and location
- **Member Status Tracking**: Active/inactive member identification

### 🏘️ **Igihande (Cell Groups) Management**
- **Group Organization**: Create and manage cell groups with leaders
- **Member Assignment**: Assign members to their respective Igihande
- **Leader Dashboard**: Igihande leaders can view their group members and participation
- **Group Statistics**: Member count, attendance rates, and activity tracking

### 📊 **Attendance Tracking**
- **Service Recording**: Track attendance for Sunday services, prayer meetings, and special events
- **Multiple Service Types**: Sunday Service, Prayer Meeting, Bible Study, Youth Meeting, Women's Meeting
- **Attendance History**: View attendance patterns per member and per Igihande
- **Real-time Statistics**: Today's attendance, weekly/monthly summaries, attendance rates

### 💰 **Dedications & Contributions**
- **Contribution Recording**: Track tithing, offerings, volunteering, and service roles
- **Multiple Types**: Tithing (10%), General Offering, Special Offering, Building Fund, Mission Support
- **Payment Methods**: Cash, Mobile Money, Bank Transfer, Check
- **Financial Overview**: Daily, weekly, monthly contribution summaries

### 📋 **Task Management (Kanban)**
- **Fellowship-Focused Tasks**: Member care, Igihande management, follow-up activities
- **Smart Categorization**: Automatic task tagging based on content
- **Workflow Stages**: To Do → In Progress → Done → On Hold
- **Due Date Management**: Overdue alerts and priority indicators
- **Church Context**: Service preparation, administrative tasks, outreach activities

### 📈 **Dashboard & Analytics**
- **Real-time Metrics**: Total members, Igihande groups, attendance records, dedications
- **Visual Charts**: Attendance trends, contribution patterns, member growth
- **Quick Stats**: Active vs inactive members, attendance rates, recent activities
- **Fellowship Branding**: ADEPR green theme (#1B6B3A) throughout the interface

## 🛠️ Tech Stack

- **Frontend Framework**: [Refine](https://refine.dev/) - React meta-framework for admin panels
- **UI Library**: [Ant Design](https://ant.design/) - Enterprise-class UI design language
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Data Layer**: [GraphQL](https://graphql.org/) - Query language for APIs
- **Build Tool**: [Vite](https://vitejs.dev/) - Fast build tool and dev server
- **Drag & Drop**: [@dnd-kit](https://dndkit.com/) - Modern drag and drop toolkit

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fellowship-church-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5174
   ```

### Demo Credentials

For testing purposes, you can use these demo credentials:
- **Email**: `michael.scott@dundermifflin.com`
- **Password**: `demodemo`

## 🏗️ Architecture

Fellowship is built using a modern, scalable architecture:

### **Data Mapping Strategy**
The application uses a clever mapping strategy to work with the existing demo GraphQL API:

- **Members** ↔ Companies API
- **Igihande Groups** ↔ Task Stages API  
- **Attendance Records** ↔ Contacts API
- **Dedications** ↔ Deals API
- **Tasks** ↔ Tasks API (unchanged)

### **Key Components**

```
src/
├── components/          # Reusable UI components
├── config/             # Resource configuration and routing
├── graphql/            # GraphQL queries, mutations, and types
├── providers/          # Data and auth providers
├── routes/             # Page components and routing
│   ├── members/        # Member management pages
│   ├── igihande/       # Igihande management pages
│   ├── attendance/     # Attendance tracking pages
│   ├── dedications/    # Dedications recording pages
│   ├── tasks/          # Kanban task management
│   └── dashboard/      # Analytics dashboard
└── utilities/          # Helper functions and utilities
```

## 🎯 User Roles & Permissions

| Role | Access Level | Capabilities |
|------|-------------|-------------|
| **Secretary** | Full Access | Member enrollment, editing, attendance recording |
| **Igihande Leader** | Group Access | View own group members and participation |
| **Committee Member** | Read-Only | Full member list and dashboard access |
| **Pastor/Admin** | Full Access | All data and settings management |

## 🌍 Church Structure (ADEPR)

Fellowship reflects the official ADEPR local church hierarchy:

```
Komite Nyobozi (Executive Committee)
├── Pasiteri (Pastor)
├── Umuyobozi ushinzwe Ibikorwa (Operations Leader)
├── Umunyamabanga (Secretary) ← Primary data entry role
├── Umubitsi (Treasurer)
└── Other committee members

Amahande (Cell Groups — Igihande × N)
└── Each Igihande
    ├── Umuyobozi w'Igihande (Cell Group Leader)
    └── Abanyetorero (Members)
```

## 📱 Mobile Responsive

Fellowship is designed to work seamlessly on mobile devices, particularly optimized for 375px width screens to accommodate modest internet connections in Rwanda.

## 🔮 Roadmap

### Phase 1: Foundation ✅ **COMPLETE**
- [x] Member management system
- [x] Igihande organization
- [x] Attendance tracking
- [x] Dedications recording
- [x] Dashboard analytics
- [x] Kanban task management

### Phase 2: Enhancement (Planned)
- [ ] i18n support (English + Kinyarwanda)
- [ ] Mobile responsiveness optimization
- [ ] Role-based access control
- [ ] Advanced reporting
- [ ] Data export capabilities

### Phase 3: Advanced Features (Future)
- [ ] SMS notifications
- [ ] Photo management
- [ ] Advanced analytics
- [ ] Multi-church support
- [ ] API integrations

## 🤝 Contributing

We welcome contributions to Fellowship! Please read our contributing guidelines and submit pull requests for any improvements.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **ADEPR Rwanda** - For the inspiration and church structure guidance
- **Refine Team** - For the excellent React framework
- **Ant Design** - For the comprehensive UI component library
- **JavaScript Mastery** - For the foundational CRM tutorial

---

<div align="center">

**Built with ❤️ for ADEPR congregations in Rwanda**

*Empowering church leaders to focus on ministry while technology handles the administration*

</div>