# Overview

This is a full-stack React application for "Fandom Furnishings," a custom art and handcrafted decor business. The application serves as a marketing website showcasing their services including engraved cups, wood burning art, epoxy resin pieces, custom paintings, tables, and wall art. The site features a modern, responsive design with sections for gallery display, services overview, about information, and customer contact forms.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent UI elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **Component Structure**: Modular component-based architecture with separate page components and reusable UI components
- **Design System**: Uses CSS custom properties for theming with light/dark mode support

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with routes prefixed under `/api`
- **Development Server**: Vite integration for hot module replacement and development proxy
- **Error Handling**: Centralized error handling middleware with structured error responses

## Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless database
- **ORM**: Drizzle ORM for type-safe database queries and migrations
- **Schema Management**: Shared schema definitions between client and server
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Authentication and Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **User Model**: Basic user schema with username/password authentication
- **Security**: Prepared for authentication implementation with user creation and retrieval methods

## External Dependencies
- **Database**: Neon PostgreSQL serverless database
- **UI Components**: Radix UI primitives for accessibility-compliant components
- **Icons**: Lucide React icon library
- **Forms**: React Hook Form with Zod schema validation
- **Styling**: PostCSS with Autoprefixer for CSS processing
- **Development**: Replit-specific plugins for development environment integration

The architecture follows modern React patterns with a clear separation between client and server code, shared type definitions, and a scalable component structure suitable for a business marketing website with potential for e-commerce expansion.