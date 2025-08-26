# Codex - Genetic Health Results System

## Overview
Codex is a comprehensive genetic health results system that allows users to access their personalized genetic health insights and recommendations.

## Pages

### 1. Home Page (`index.html`)
- **Purpose**: Landing page for users to enter their Patient ID
- **Features**: 
  - Beautiful, responsive design
  - Simple ID input form
  - Direct access to results
- **Usage**: Users enter their Patient ID and click "See Your Results"

### 2. Admin Dashboard (`admin.html`)
- **Purpose**: Administrative interface for healthcare providers
- **Features**:
  - Upload PDF reports
  - Process genetic data
  - View all patient reports
  - Generate shareable links
- **Access**: Healthcare professionals only

### 3. User Results Page (`user_page/User_Page.html`)
- **Purpose**: Display personalized genetic health results
- **Features**:
  - Comprehensive health insights
  - Interactive parameter lists
  - Mobile-optimized interface
  - Downloadable reports

## How It Works

### For Users:
1. Visit the home page
2. Enter your Patient ID
3. Click "See Your Results"
4. View your personalized genetic health analysis

### For Healthcare Providers:
1. Access admin dashboard
2. Upload patient PDF reports
3. Process and analyze genetic data
4. Share results with patients via links

## Technical Features

- **Responsive Design**: Works on all devices
- **API Integration**: Fetches data from secure endpoints
- **Mobile Optimization**: Touch-friendly interface
- **Real-time Processing**: Instant results display
- **Secure Access**: Patient ID-based authentication

## File Structure

```
Codex_web_page/
├── index.html               # User home page
├── admin.html               # Admin dashboard
├── script.js                # Admin functionality
├── styles.css               # Admin styles
├── user_page/               # User results system
│   ├── User_Page.html      # Main user interface
│   ├── User_page.css       # User page styles
│   ├── patient_results_handler.js  # Results processing
│   └── Scripts/            # Additional functionality
└── curves&pics/            # Image assets
```

## Getting Started

1. **For Users**: Simply visit the home page and enter your Patient ID
2. **For Admins**: Access the admin dashboard to manage patient data
3. **For Developers**: The system is built with modern web technologies

## Support

For technical support or questions, please contact the development team.

---

© 2024 Codex. All rights reserved.
