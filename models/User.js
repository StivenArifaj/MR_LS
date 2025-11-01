
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Common fields
  userId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  userType: { 
    type: String, 
    required: true, 
    enum: ['student', 'parent', 'teacher', 'school'] 
  },
  accountStatus: { 
    type: String, 
    required: true, 
    default: 'active', 
    enum: ['active', 'pending_verification', 'suspended'] 
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastLoginAt: { type: Date },
  emailVerified: { type: Boolean, default: false },
  profilePhotoUrl: { type: String },

  // Student-specific fields
  firstName: { type: String },
  lastName: { type: String },
  dateOfBirth: { type: Date },
  gradeLevel: { type: String },
  parentEmail: { type: String },

  // Parent-specific fields
  numberOfChildren: { type: Number },
  childrenAges: [{ type: String }],
  phoneNumber: { type: String },

  // Teacher-specific fields
  schoolName: { type: String },
  schoolDistrict: { type: String },
  subjectTeaching: { type: String },
  gradeTeaching: [{ type: String }],
  yearsExperience: { type: String, enum: ['0-1', '1-5', '5-10', '10+'] },
  affiliationProofUrl: { type: String },
  affiliationVerified: { type: Boolean, default: false },

  // School/Institution-specific fields
  institutionName: { type: String },
  institutionType: { type: String, enum: ['public', 'private', 'charter', 'district', 'university', 'nonprofit'] },
  numberOfStudents: { type: String, enum: ['< 100', '100-500', '500-1000', '1000-5000', '5000+'] },
  address: { type: String },
  city: { type: String },
  stateProvince: { type: String },
  country: { type: String },
  website: { type: String },
  administratorName: { type: String },
  administratorEmail: { type: String },

  // Preferences & settings
  languagePreference: { type: String, default: 'en' },
  notifications: {
    emailUpdates: { type: Boolean, default: true },
    pushNotifications: { type: Boolean, default: true },
    weeklyReport: { type: Boolean, default: false },
    achievementAlerts: { type: Boolean, default: true },
  },

  // Future features
  referralCode: { type: String, unique: true },
  referredBy: { type: String },
  subscriptionTier: { type: String, default: 'free', enum: ['free', 'premium', 'institutional'] },
});

// This line prevents Mongoose from recompiling the model if it's already been compiled.
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
