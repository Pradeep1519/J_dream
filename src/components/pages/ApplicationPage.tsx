// src/components/pages/ApplicationPage.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PremiumHeader from '../PremiumHeader';
import PremiumFooter from '../PremiumFooter';
import { 
  ArrowLeft, ArrowRight, Check, ChevronRight, 
  Calendar, Clock, DollarSign, Mail, Phone, User, Heart, Cpu, Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Program Data
const PROGRAMS = [
  {
    id: 'engineering',
    name: 'Engineering Excellence',
    icon: '🛠️',
    iconComponent: Cpu,
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    lightBg: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    batches: [
      { id: 'foundation', name: 'Tech Buds', class: '6-8', minClass: 6, maxClass: 8, fee: '₹15,000' },
      { id: 'explorer', name: 'Tech Explorers', class: '9-10', minClass: 9, maxClass: 10, fee: '₹18,000' },
      { id: 'achiever', name: 'Engineering Excellence', class: '11-12', minClass: 11, maxClass: 12, fee: '₹20,000' }
    ]
  },
  {
    id: 'medical',
    name: 'Medical Foundations',
    icon: '🩺',
    iconComponent: Heart,
    color: 'green',
    gradient: 'from-green-500 to-green-600',
    lightBg: 'bg-green-50',
    textColor: 'text-green-600',
    borderColor: 'border-green-200',
    batches: [
      { id: 'foundation', name: 'Little Healers', class: '6-8', minClass: 6, maxClass: 8, fee: '₹15,000' },
      { id: 'explorer', name: 'Medical Explorers', class: '9-10', minClass: 9, maxClass: 10, fee: '₹18,000' },
      { id: 'achiever', name: 'Medical Excellence', class: '11-12', minClass: 11, maxClass: 12, fee: '₹20,000' }
    ]
  },
  {
    id: 'civil',
    name: 'Civil Services Leadership',
    icon: '⚖️',
    iconComponent: Scale,
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600',
    lightBg: 'bg-purple-50',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    batches: [
      { id: 'foundation', name: 'Young Leaders', class: '6-8', minClass: 6, maxClass: 8, fee: '₹15,000' },
      { id: 'explorer', name: 'Civil Explorers', class: '9-10', minClass: 9, maxClass: 10, fee: '₹18,000' },
      { id: 'achiever', name: 'Civil Excellence', class: '11-12', minClass: 11, maxClass: 12, fee: '₹20,000' }
    ]
  }
];

// Form Steps
const STEPS = [
  { id: 1, name: 'Program' },
  { id: 2, name: 'Student Details' },
  { id: 3, name: 'Parent Details' },
  { id: 4, name: 'Batch & Fee' },
  { id: 5, name: 'Review' }
];

export default function ApplicationPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    program: '',
    studentName: '',
    studentDob: '',
    studentClass: '',
    schoolName: '',
    studentEmail: '',
    studentPhone: '',
    parentName: '',
    parentRelation: '',
    parentPhone: '',
    parentEmail: '',
    batch: '',
    fee: '',
    terms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [availableBatches, setAvailableBatches] = useState<any[]>([]);

  useEffect(() => {
    if (formData.program && formData.studentClass) {
      const program = PROGRAMS.find(p => p.id === formData.program);
      if (program) {
        const classNum = parseInt(formData.studentClass);
        const filtered = program.batches.filter(
          batch => classNum >= batch.minClass && classNum <= batch.maxClass
        );
        setAvailableBatches(filtered);
        
        if (formData.batch) {
          const batchStillAvailable = filtered.some(b => b.id === formData.batch);
          if (!batchStillAvailable) {
            updateForm('batch', '');
            updateForm('fee', '');
          }
        }
      }
    } else {
      setAvailableBatches([]);
    }
  }, [formData.program, formData.studentClass]);

  const updateForm = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    switch(currentStep) {
      case 1:
        if (!formData.program) newErrors.program = 'Please select a program';
        break;
      case 2:
        if (!formData.studentName) newErrors.studentName = 'Student name is required';
        if (!formData.studentDob) newErrors.studentDob = 'Date of birth is required';
        if (!formData.studentClass) newErrors.studentClass = 'Class is required';
        if (!formData.schoolName) newErrors.schoolName = 'School name is required';
        if (!formData.studentPhone) newErrors.studentPhone = 'Phone number is required';
        else if (!/^\d{10}$/.test(formData.studentPhone)) newErrors.studentPhone = 'Invalid phone number';
        if (formData.studentEmail && !/\S+@\S+\.\S+/.test(formData.studentEmail)) {
          newErrors.studentEmail = 'Invalid email format';
        }
        break;
      case 3:
        if (!formData.parentName) newErrors.parentName = 'Parent name is required';
        if (!formData.parentRelation) newErrors.parentRelation = 'Relationship is required';
        if (!formData.parentPhone) newErrors.parentPhone = 'Parent phone is required';
        else if (!/^\d{10}$/.test(formData.parentPhone)) newErrors.parentPhone = 'Invalid phone number';
        break;
      case 4:
        if (!formData.batch) newErrors.batch = 'Please select a batch';
        break;
      case 5:
        if (!formData.terms) newErrors.terms = 'Please accept terms and conditions';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < 5) {
        setCurrentStep(currentStep + 1);
        window.scrollTo(0, 0);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    } else {
      navigate('/programs');
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    const enrollmentNumber = 'JD' + Date.now().toString().slice(-8);
    navigate('/apply/success', { 
      state: { enrollmentNumber, ...formData } 
    });
  };

  const selectedProgram = PROGRAMS.find(p => p.id === formData.program);
  const selectedBatch = selectedProgram?.batches.find(b => b.id === formData.batch);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PremiumHeader />

      {/* Header */}
      <div className="pt-28 pb-6 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-textprimary mb-2">
            Apply for Admission
          </h1>
          <p className="font-paragraph text-sm sm:text-base text-textprimary/60">
            Complete the application form to enroll in your desired program
          </p>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              {STEPS.map((step) => (
                <div key={step.id} className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                    ${currentStep > step.id ? 'bg-[#B8860B] text-white' 
                      : currentStep === step.id ? 'bg-[#B8860B] text-white ring-4 ring-[#B8860B]/20'
                      : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {currentStep > step.id ? <Check size={16} /> : step.id}
                  </div>
                  <span className="text-xs mt-2 text-textprimary/60 hidden sm:block">{step.name}</span>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div 
                className="bg-[#B8860B] h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100"
            >
              {/* Step 1: Program Selection */}
              {currentStep === 1 && (
                <div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-textprimary mb-6">
                    Select Your Program
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {PROGRAMS.map((program) => {
                      const Icon = program.iconComponent;
                      const isSelected = formData.program === program.id;
                      return (
                        <div
                          key={program.id}
                          onClick={() => updateForm('program', program.id)}
                          className={`relative p-4 sm:p-6 rounded-xl border-2 cursor-pointer transition-all
                            ${isSelected ? `${program.borderColor} ${program.lightBg} shadow-md` 
                              : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                            }`}
                        >
                          {isSelected && (
                            <div className="absolute top-2 right-2">
                              <Check size={16} className="text-[#B8860B]" />
                            </div>
                          )}
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${program.gradient} flex items-center justify-center text-2xl sm:text-3xl mb-3`}>
                            {program.icon}
                          </div>
                          <h3 className="font-heading text-base sm:text-lg font-bold text-textprimary">
                            {program.name}
                          </h3>
                        </div>
                      );
                    })}
                  </div>
                  {errors.program && <p className="mt-4 text-sm text-red-500">{errors.program}</p>}
                </div>
              )}

              {/* Step 2: Student Details */}
              {currentStep === 2 && (
                <div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-textprimary mb-6">
                    Student Details
                  </h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-textprimary mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.studentName}
                          onChange={(e) => updateForm('studentName', e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 focus:border-[#B8860B] text-textprimary"
                          placeholder="Enter student's full name"
                        />
                        {errors.studentName && <p className="mt-1 text-sm text-red-500">{errors.studentName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-textprimary mb-1">
                          Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          value={formData.studentDob}
                          onChange={(e) => updateForm('studentDob', e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 focus:border-[#B8860B] text-textprimary"
                        />
                        {errors.studentDob && <p className="mt-1 text-sm text-red-500">{errors.studentDob}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-textprimary mb-1">
                          Current Class <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.studentClass}
                          onChange={(e) => updateForm('studentClass', e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 focus:border-[#B8860B] text-textprimary"
                        >
                          <option value="">Select class</option>
                          {[6,7,8,9,10,11,12].map(num => (
                            <option key={num} value={num}>Class {num}</option>
                          ))}
                        </select>
                        {errors.studentClass && <p className="mt-1 text-sm text-red-500">{errors.studentClass}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-textprimary mb-1">
                          School Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.schoolName}
                          onChange={(e) => updateForm('schoolName', e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 focus:border-[#B8860B] text-textprimary"
                          placeholder="Enter school name"
                        />
                        {errors.schoolName && <p className="mt-1 text-sm text-red-500">{errors.schoolName}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-textprimary mb-1">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.studentPhone}
                          onChange={(e) => updateForm('studentPhone', e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 focus:border-[#B8860B] text-textprimary"
                          placeholder="10-digit mobile number"
                          maxLength={10}
                        />
                        {errors.studentPhone && <p className="mt-1 text-sm text-red-500">{errors.studentPhone}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-textprimary mb-1">
                          Email <span className="text-gray-400">(Optional)</span>
                        </label>
                        <input
                          type="email"
                          value={formData.studentEmail}
                          onChange={(e) => updateForm('studentEmail', e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 focus:border-[#B8860B] text-textprimary"
                          placeholder="student@email.com"
                        />
                        {errors.studentEmail && <p className="mt-1 text-sm text-red-500">{errors.studentEmail}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Parent Details */}
              {currentStep === 3 && (
                <div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-textprimary mb-6">
                    Parent/Guardian Details
                  </h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-textprimary mb-1">
                          Parent Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.parentName}
                          onChange={(e) => updateForm('parentName', e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 focus:border-[#B8860B] text-textprimary"
                          placeholder="Enter parent's name"
                        />
                        {errors.parentName && <p className="mt-1 text-sm text-red-500">{errors.parentName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-textprimary mb-1">
                          Relationship <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.parentRelation}
                          onChange={(e) => updateForm('parentRelation', e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 focus:border-[#B8860B] text-textprimary"
                        >
                          <option value="">Select relationship</option>
                          <option value="father">Father</option>
                          <option value="mother">Mother</option>
                          <option value="guardian">Guardian</option>
                        </select>
                        {errors.parentRelation && <p className="mt-1 text-sm text-red-500">{errors.parentRelation}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-textprimary mb-1">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.parentPhone}
                          onChange={(e) => updateForm('parentPhone', e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 focus:border-[#B8860B] text-textprimary"
                          placeholder="10-digit mobile number"
                          maxLength={10}
                        />
                        {errors.parentPhone && <p className="mt-1 text-sm text-red-500">{errors.parentPhone}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-textprimary mb-1">
                          Email <span className="text-gray-400">(Optional)</span>
                        </label>
                        <input
                          type="email"
                          value={formData.parentEmail}
                          onChange={(e) => updateForm('parentEmail', e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 focus:border-[#B8860B] text-textprimary"
                          placeholder="parent@email.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Batch Selection */}
              {currentStep === 4 && selectedProgram && (
                <div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-textprimary mb-6">
                    Select Your Batch
                  </h2>
                  
                  {!formData.studentClass ? (
                    <div className="text-center py-8">
                      <p className="text-textprimary/60">Please complete student details first</p>
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="mt-4 px-6 py-2 bg-[#B8860B] text-white rounded-lg hover:bg-[#D4AF37] transition-colors"
                      >
                        Go to Student Details
                      </button>
                    </div>
                  ) : availableBatches.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-textprimary/60">No batches available for Class {formData.studentClass}</p>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm text-textprimary/60 mb-4">
                        Available batches for Class {formData.studentClass}:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {availableBatches.map((batch) => {
                          const isSelected = formData.batch === batch.id;
                          return (
                            <div
                              key={batch.id}
                              onClick={() => {
                                updateForm('batch', batch.id);
                                updateForm('fee', batch.fee);
                              }}
                              className={`relative p-4 sm:p-6 rounded-xl border-2 cursor-pointer transition-all
                                ${isSelected ? `${selectedProgram.borderColor} ${selectedProgram.lightBg} shadow-md` 
                                  : 'border-gray-200 hover:border-gray-300'
                                }`}
                            >
                              {isSelected && (
                                <div className="absolute top-2 right-2">
                                  <Check size={16} className="text-[#B8860B]" />
                                </div>
                              )}
                              <h3 className="font-heading text-base sm:text-lg font-bold text-textprimary mb-1">
                                {batch.name}
                              </h3>
                              <p className="text-sm text-primary font-medium mb-2">
                                Class {batch.class}
                              </p>
                              <div className="flex items-center gap-2 text-xs text-textprimary/60 mb-3">
                                <Calendar size={14} /> 12 Months
                                <Clock size={14} className="ml-2" /> Weekends
                              </div>
                              <p className="font-heading text-lg sm:text-xl font-bold text-[#B8860B]">
                                {batch.fee}/year
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                  {errors.batch && <p className="mt-4 text-sm text-red-500">{errors.batch}</p>}
                </div>
              )}

              {/* Step 5: Review */}
              {currentStep === 5 && selectedProgram && selectedBatch && (
                <div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-textprimary mb-6">
                    Review Your Application
                  </h2>
                  
                  <div className="space-y-4">
                    {/* Program Summary */}
                    <div className={`p-4 sm:p-6 rounded-xl ${selectedProgram.lightBg} border ${selectedProgram.borderColor}`}>
                      <h3 className="font-heading text-base sm:text-lg font-bold text-textprimary mb-3">
                        Program Details
                      </h3>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${selectedProgram.gradient} flex items-center justify-center text-2xl sm:text-3xl`}>
                          {selectedProgram.icon}
                        </div>
                        <div>
                          <p className="font-heading font-bold text-textprimary">{selectedProgram.name}</p>
                          <p className="text-sm text-textprimary/60">{selectedBatch.name} • Class {selectedBatch.class}</p>
                        </div>
                      </div>
                    </div>

                    {/* Student Summary */}
                    <div className="p-4 sm:p-6 bg-gray-50 rounded-xl">
                      <h3 className="font-heading text-base sm:text-lg font-bold text-textprimary mb-3">
                        Student Information
                      </h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-textprimary/60 text-xs">Name</p>
                          <p className="font-medium text-textprimary">{formData.studentName}</p>
                        </div>
                        <div>
                          <p className="text-textprimary/60 text-xs">Class</p>
                          <p className="font-medium text-textprimary">{formData.studentClass}</p>
                        </div>
                        <div>
                          <p className="text-textprimary/60 text-xs">School</p>
                          <p className="font-medium text-textprimary">{formData.schoolName}</p>
                        </div>
                        <div>
                          <p className="text-textprimary/60 text-xs">Phone</p>
                          <p className="font-medium text-textprimary">{formData.studentPhone}</p>
                        </div>
                        {formData.studentEmail && (
                          <div className="col-span-2">
                            <p className="text-textprimary/60 text-xs">Email</p>
                            <p className="font-medium text-textprimary">{formData.studentEmail}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Parent Summary */}
                    <div className="p-4 sm:p-6 bg-gray-50 rounded-xl">
                      <h3 className="font-heading text-base sm:text-lg font-bold text-textprimary mb-3">
                        Parent/Guardian Information
                      </h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-textprimary/60 text-xs">Name</p>
                          <p className="font-medium text-textprimary">{formData.parentName}</p>
                        </div>
                        <div>
                          <p className="text-textprimary/60 text-xs">Relation</p>
                          <p className="font-medium text-textprimary">{formData.parentRelation}</p>
                        </div>
                        <div>
                          <p className="text-textprimary/60 text-xs">Phone</p>
                          <p className="font-medium text-textprimary">{formData.parentPhone}</p>
                        </div>
                      </div>
                    </div>

                    {/* Fee Summary */}
                    <div className="p-4 sm:p-6 bg-gray-50 rounded-xl">
                      <h3 className="font-heading text-base sm:text-lg font-bold text-textprimary mb-3">
                        Fee Details
                      </h3>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-textprimary/60 text-xs">Total Fee (Annual)</p>
                          <p className="font-heading text-xl sm:text-2xl font-bold text-[#B8860B]">{selectedBatch.fee}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-textprimary/60 text-xs">Payment Plan</p>
                          <p className="font-medium text-textprimary">Full Payment</p>
                        </div>
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={formData.terms}
                        onChange={(e) => updateForm('terms', e.target.checked)}
                        className="mt-1"
                      />
                      <label htmlFor="terms" className="text-sm text-textprimary/80">
                        I confirm that the information provided is correct and I agree to the 
                        <Link to="/terms" className="text-[#B8860B] hover:underline mx-1">Terms & Conditions</Link>
                        and
                        <Link to="/privacy" className="text-[#B8860B] hover:underline mx-1">Privacy Policy</Link>
                      </label>
                    </div>
                    {errors.terms && <p className="text-sm text-red-500">{errors.terms}</p>}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handleBack}
                  className="px-5 sm:px-6 py-2.5 border border-gray-300 text-textprimary rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm sm:text-base"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentStep === 4 && availableBatches.length === 0}
                  className={`px-6 sm:px-8 py-2.5 bg-[#B8860B] text-white rounded-lg hover:bg-[#D4AF37] transition-colors flex items-center gap-2 font-semibold text-sm sm:text-base
                    ${currentStep === 4 && availableBatches.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {currentStep === 5 ? 'Submit Application' : 'Continue'}
                  <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <PremiumFooter />
    </div>
  );
}