# ADDSI Application Installation & CMS Guide

## Prerequisites

Before installing the application, make sure you have the following installed on your system:

- PHP 8.2 or higher
- Composer (Latest version)
- Node.js (Latest LTS version)
- npm or yarn
- MySQL or PostgreSQL database

## Installation Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd addsi
```

### 2. Backend Setup

Navigate to the backend directory and install PHP dependencies:

```bash
cd backend
composer install
```

Configure your environment:

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Generate application key:
   ```bash
   php artisan key:generate
   ```

3. Configure your database in the `.env` file:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=your_database_user
   DB_PASSWORD=your_database_password
   ```

4. Run database migrations and seeders:
   ```bash
   php artisan migrate --seed
   ```

5. Start the Laravel development server:
   ```bash
   php artisan serve
   ```

### 3. Frontend Setup

In a new terminal, navigate to the project root and install Node.js dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application should now be running at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000

## CMS Usage Guide

The Content Management System (CMS) provides an interface to manage various aspects of the website. Here's how to use it:

### 1. Accessing the CMS

1. Navigate to http://localhost:5173/login
2. Log in with your administrator credentials

### 2. Available Management Sections

#### Team Management
- Path: `/admin/TeamManagement`
- Features:
  - Add/Edit/Delete team members
  - Update team member information (name, position, photo)
  - Manage team member display order

#### Partners Management
- Path: `/admin/PartnersManagement`
- Features:
  - Add/Edit/Delete partners
  - Upload partner logos
  - Manage partner display order and visibility

#### WASTO Products Management
- Path: `/admin/WastoProductsManagement`
- Features:
  - Add/Edit/Delete WASTO products
  - Manage product details and images
  - Update product descriptions and specifications

#### WASTO Achievements Management
- Path: `/admin/WastoAchievementsManagement`
- Features:
  - Add/Edit/Delete achievements
  - Upload achievement images
  - Manage achievement descriptions

#### Settings Management
- Path: `/admin/SettingsManagement`
- Features:
  - Update website general settings
  - Manage contact information
  - Configure email settings

### 3. Best Practices

1. **Image Guidelines**:
   - Use optimized images (recommended size: under 1MB)
   - Maintain consistent aspect ratios
   - Use PNG format for logos and JPG for photos

2. **Content Management**:
   - Keep content concise and professional
   - Preview changes before publishing
   - Regularly backup your database

3. **Security**:
   - Change your password regularly
   - Log out after each session
   - Don't share your admin credentials

## Troubleshooting

If you encounter any issues:

1. **Backend Issues**:
   - Check Laravel logs in `backend/storage/logs`
   - Ensure database connection is correct
   - Verify PHP version compatibility

2. **Frontend Issues**:
   - Clear browser cache
   - Check browser console for errors
   - Verify API endpoint configuration

## Support

For additional support or questions, please refer to:
- Project documentation
- Issue tracker
- Development team contacts

---

**Note**: Keep this documentation updated as the application evolves. Last updated: [Current Date] 