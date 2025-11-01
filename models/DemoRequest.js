
const mongoose = require('mongoose');

const demoRequestSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  schoolName: { type: String, required: true },
  institutionRole: { 
    type: String, 
    required: true, 
    enum: ['Principal', 'Teacher', 'Coordinator', 'Program Manager'] 
  },
  workEmail: { type: String, required: true },
  phoneNumber: { type: String },
  country: { type: String },
  city: { type: String },
  message: { type: String },
  preferredDemoType: { 
    type: String, 
    required: true, 
    enum: ['live_call', 'product_tour', 'email_info_packet'] 
  },
  status: { 
    type: String, 
    default: 'pending', 
    enum: ['pending', 'scheduled', 'completed', 'no_show', 'rejected'] 
  },
  assignedToStaffId: { type: String },
  scheduledDate: { type: Date },
  completedDate: { type: Date },
  sourceUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  notes: { type: String },
});

module.exports = mongoose.models.DemoRequest || mongoose.model('DemoRequest', demoRequestSchema);
