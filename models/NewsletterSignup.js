
const mongoose = require('mongoose');

const newsletterSignupSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  source: { type: String }, // e.g., 'footer_signup', 'modal_popup'
  ipAddress: { type: String },
  status: { 
    type: String, 
    default: 'subscribed', 
    enum: ['subscribed', 'unsubscribed', 'pending'] 
  },
  subscribedAt: { type: Date, default: Date.now },
  unsubscribedAt: { type: Date },
});

module.exports = mongoose.models.NewsletterSignup || mongoose.model('NewsletterSignup', newsletterSignupSchema);
