# Rent & Flatmate Finder - System Design

## 1. Overview
Rent & Flatmate Finder is a web platform that connects room owners and tenants by matching them based on location and budget preferences. The platform uses a compatibility engine to rank listings and allows users to communicate through real-time chat.

---

## 2. User Roles

### Owner
- Register/Login
- Create room listings
- View interested tenants
- Accept or reject requests
- Mark listing as filled

### Tenant
- Register/Login
- Create preference profile
- Browse room listings
- View compatibility score
- Send interest requests
- Chat with owners after acceptance

### Admin
- Manage users
- Manage listings
- Monitor platform activity

---

## 3. System Architecture

Frontend:
- React + Vite

Backend:
- Node.js + Express

Database:
- MongoDB Atlas

Authentication:
- JWT Authentication

Real-Time Communication:
- Socket.io

Notifications:
- Nodemailer

Deployment:
- Frontend → Vercel
- Backend → Render

---

## 4. Database Design

### User
```
{
  name,
  email,
  password,
  role
}
```

### Listing
```
{
  ownerId,
  location,
  rent,
  availableDate,
  roomType,
  furnished,
  image,
  filled
}
```

### TenantProfile
```
{
  userId,
  preferredLocation,
  budgetMin,
  budgetMax,
  moveInDate
}
```

### Message
```
{
  senderId,
  receiverId,
  message,
  createdAt
}
```

---

## 5. Compatibility Scoring

The compatibility score is calculated based on:

1. Location Match → 50 points
2. Budget Match → 50 points

Maximum Score = 100

Example:

Tenant:
- Location: Noida
- Budget: ₹10,000 – ₹15,000

Listing:
- Location: Noida
- Rent: ₹12,000

Score = 100

---

## 6. LLM Integration

Future versions can integrate an LLM to generate:

- Compatibility explanation
- Personalized recommendations
- Better ranking of listings

If the LLM service fails, the system falls back to the rule-based scoring engine.

---

## 7. Real-Time Chat Flow

1. Tenant sends interest request.
2. Owner accepts request.
3. Chat room is created.
4. Messages are exchanged using Socket.io.
5. Messages are stored in MongoDB.

---

## 8. Notification Flow

Email notifications are sent when:

- A tenant with high compatibility expresses interest.
- Owner accepts a request.
- Owner rejects a request.

---

## 9. Future Improvements

- Google Maps Integration
- AI Recommendation System
- Image Uploads
- Payment Gateway
- Mobile Application
- Advanced Search Filters