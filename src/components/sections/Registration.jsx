import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { CheckCircle, Send } from 'lucide-react';
import SectionWrapper, { SectionHeader } from '../ui/SectionWrapper';
import CustomSelect from '../ui/Select';
import Checkbox from '../ui/Checkbox';

const domains = [
  'Web Development',
  'Mobile Apps',
  'AI / Machine Learning',
  'Data Science',
  'Blockchain',
  'IoT / Hardware',
  'Cloud & DevOps',
  'Cybersecurity',
  'AR / VR',
  'Other',
];

const experienceLevels = [
  'Beginner (0-1 year)',
  'Intermediate (1-3 years)',
  'Advanced (3-5 years)',
  'Expert (5+ years)',
];

export default function Registration() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      college: '',
      phone: '',
      teamName: '',
      teamSize: '',
      github: '',
      linkedin: '',
      domain: '',
      experience: '',
      reason: '',
      agree: false,
    },
  });

  function onSubmit() {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 4000);
  }

  const inputClass = 'w-full rounded-2xl neumorph-inset px-4 py-3 text-sm text-text dark:text-dark-text bg-transparent outline-none focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-muted/60';

  const labelClass = 'block text-sm font-medium text-text dark:text-dark-text mb-1.5';

  const errorClass = 'min-h-[1.25rem] text-xs text-red-500 mt-1 leading-tight';

  return (
    <SectionWrapper id="register">
      <SectionHeader
        title="Register Now"
        subtitle="Secure your spot at the most exciting hackathon of the year. Spaces are limited!"
      />

      <div className="mx-auto max-w-2xl">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="neumorph rounded-3xl p-12 text-center"
            >
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <CheckCircle size={40} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-text dark:text-dark-text mb-2">
                Registration Successful!
              </h3>
              <p className="text-muted dark:text-dark-muted">
                Thank you for registering. We'll send you a confirmation email shortly with further details.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="neumorph rounded-3xl p-6 md:p-8 space-y-4"
            >
              <div className="grid gap-x-5 gap-y-1 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className={labelClass}>Full Name *</label>
                  <input
                    id="fullName"
                    {...register('fullName', {
                      required: 'Name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' },
                      maxLength: { value: 100, message: 'Name is too long' },
                    })}
                    className={inputClass}
                    placeholder="John Doe"
                  />
                  <p className={errorClass}>{errors.fullName?.message || ''}</p>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>Email *</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address',
                      },
                    })}
                    className={inputClass}
                    placeholder="john@example.com"
                  />
                  <p className={errorClass}>{errors.email?.message || ''}</p>
                </div>

                <div>
                  <label htmlFor="college" className={labelClass}>College / University *</label>
                  <input
                    id="college"
                    {...register('college', { required: 'College is required' })}
                    className={inputClass}
                    placeholder="University of Technology"
                  />
                  <p className={errorClass}>{errors.college?.message || ''}</p>
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[\d\s\-+()]{7,20}$/,
                        message: 'Invalid phone number',
                      },
                    })}
                    className={inputClass}
                    placeholder="+1 (555) 123-4567"
                  />
                  <p className={errorClass}>{errors.phone?.message || ''}</p>
                </div>

                <div>
                  <label htmlFor="teamName" className={labelClass}>Team Name</label>
                  <input
                    id="teamName"
                    {...register('teamName', {
                      maxLength: { value: 100, message: 'Team name too long' },
                    })}
                    className={inputClass}
                    placeholder="Code Crusaders"
                  />
                  <p className={errorClass}>{errors.teamName?.message || ''}</p>
                </div>

                <div>
                  <label htmlFor="teamSize" className={labelClass}>Team Size</label>
                  <input type="hidden" {...register('teamSize')} />
                  <CustomSelect
                    id="teamSize"
                    value={watch('teamSize')}
                    onChange={(e) => setValue('teamSize', e.target.value, { shouldValidate: true })}
                    placeholder="Select size"
                    options={[
                      { value: '', label: 'Select size' },
                      ...['1', '2', '3', '4', '5'].map((n) => ({ value: n, label: `${n} Member${n > '1' ? 's' : ''}` })),
                    ]}
                  />
                  <p className={errorClass}>{errors.teamSize?.message || ''}</p>
                </div>

                <div>
                  <label htmlFor="github" className={labelClass}>GitHub URL</label>
                  <input
                    id="github"
                    type="url"
                    {...register('github', {
                      pattern: {
                        value: /^https?:\/\/.+/,
                        message: 'Must be a valid URL',
                      },
                    })}
                    className={inputClass}
                    placeholder="https://github.com/yourprofile"
                  />
                  <p className={errorClass}>{errors.github?.message || ''}</p>
                </div>

                <div>
                  <label htmlFor="linkedin" className={labelClass}>LinkedIn URL</label>
                  <input
                    id="linkedin"
                    type="url"
                    {...register('linkedin', {
                      pattern: {
                        value: /^https?:\/\/.+/,
                        message: 'Must be a valid URL',
                      },
                    })}
                    className={inputClass}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                  <p className={errorClass}>{errors.linkedin?.message || ''}</p>
                </div>

                <div>
                  <label htmlFor="domain" className={labelClass}>Project Domain *</label>
                  <input type="hidden" {...register('domain', { required: 'Please select a domain' })} />
                  <CustomSelect
                    id="domain"
                    value={watch('domain')}
                    onChange={(e) => setValue('domain', e.target.value, { shouldValidate: true })}
                    error={errors.domain}
                    placeholder="Select domain"
                    options={[
                      { value: '', label: 'Select domain' },
                      ...domains.map((d) => ({ value: d, label: d })),
                    ]}
                  />
                  <p className={errorClass}>{errors.domain?.message || ''}</p>
                </div>

                <div>
                  <label htmlFor="experience" className={labelClass}>Experience Level *</label>
                  <input type="hidden" {...register('experience', { required: 'Please select your experience level' })} />
                  <CustomSelect
                    id="experience"
                    value={watch('experience')}
                    onChange={(e) => setValue('experience', e.target.value, { shouldValidate: true })}
                    error={errors.experience}
                    placeholder="Select level"
                    options={[
                      { value: '', label: 'Select level' },
                      ...experienceLevels.map((l) => ({ value: l, label: l })),
                    ]}
                  />
                  <p className={errorClass}>{errors.experience?.message || ''}</p>
                </div>
              </div>

              <div>
                <label htmlFor="reason" className={labelClass}>Why do you want to join? *</label>
                <textarea
                  id="reason"
                  rows={4}
                  {...register('reason', {
                    required: 'Please tell us why you want to join',
                    minLength: { value: 20, message: 'Please write at least 20 characters' },
                    maxLength: { value: 500, message: 'Maximum 500 characters' },
                  })}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about your passion, what you hope to build, and why you'd be a great addition..."
                />
                <p className={errorClass}>{errors.reason?.message || ''}</p>
              </div>

              <div>
                <input type="hidden" {...register('agree', { required: 'You must agree to the terms' })} />
                <Checkbox
                  checked={watch('agree')}
                  onChange={(e) => setValue('agree', e.target.checked, { shouldValidate: true })}
                  error={errors.agree}
                >
                  I agree to the{' '}
                  <span className="text-primary font-medium">Terms & Conditions</span> and{' '}
                  <span className="text-primary font-medium">Code of Conduct</span> *
                </Checkbox>
                <p className={errorClass}>{errors.agree?.message || ''}</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-white hover:brightness-110 transition-all disabled:opacity-60 cursor-pointer"
              >
                <Send size={18} />
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
