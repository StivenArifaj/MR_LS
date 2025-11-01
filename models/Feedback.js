
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  userId: { type: String }, // Can be anonymous
  userName: { type: String, required: true },
  userRole: { 
    type: String, 
    required: true, 
    enum: ['student', 'teacher', 'parent', 'school', 'institution'] 
  },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  category: { 
    type: String, 
    default: 'testimonial', 
    enum: ['general', 'feature_request', 'bug_report', 'testimonial'] 
  },
  isPublished: { type: Boolean, default: false },
  isFeatured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  approvedAt: { type: Date },
  approvedBy: { type: String }, // Admin ID
});

module.exports = mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema);
