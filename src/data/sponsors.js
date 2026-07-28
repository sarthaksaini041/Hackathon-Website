import {
  SiGooglecloud,
  SiGithub,
  SiVercel,
  SiCloudflare,
  SiStripe,
  SiSupabase,
  SiMongodb,
  SiPostman,
  SiFigma,
} from 'react-icons/si';

export const sponsors = {
  platinum: [
    { name: 'Google Cloud', tier: 'Platinum', icon: SiGooglecloud, color: '#4285F4' },
    { name: 'GitHub', tier: 'Platinum', icon: SiGithub, color: '#181717' },
  ],
  gold: [
    { name: 'Vercel', tier: 'Gold', icon: SiVercel, color: '#000000' },
    { name: 'Cloudflare', tier: 'Gold', icon: SiCloudflare, color: '#F38020' },
    { name: 'Stripe', tier: 'Gold', icon: SiStripe, color: '#635BFF' },
  ],
  silver: [
    { name: 'Supabase', tier: 'Silver', icon: SiSupabase, color: '#3ECF8E' },
    { name: 'MongoDB', tier: 'Silver', icon: SiMongodb, color: '#47A248' },
    { name: 'Postman', tier: 'Silver', icon: SiPostman, color: '#FF6C37' },
    { name: 'Figma', tier: 'Silver', icon: SiFigma, color: '#F24E1E' },
  ],
};
