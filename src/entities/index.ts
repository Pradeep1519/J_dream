/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: leadershipteam
 * Interface for LeadershipTeam
 */
export interface LeadershipTeam {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  fullName?: string;
  /** @wixFieldType text */
  role?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  photo?: string;
  /** @wixFieldType text */
  biography?: string;
  /** @wixFieldType text */
  experienceHighlights?: string;
  /** @wixFieldType url */
  linkedinProfile?: string;
}


/**
 * Collection ID: mentors
 * Interface for Mentors
 */
export interface Mentors {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  name?: string;
  /** @wixFieldType text */
  designation?: string;
  /** @wixFieldType text */
  organization?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  photo?: string;
  /** @wixFieldType text */
  bio?: string;
  /** @wixFieldType url */
  linkedInProfile?: string;
}


/**
 * Collection ID: partnershipopportunities
 * Interface for PartnershipOpportunities
 */
export interface PartnershipOpportunities {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  partnershipCategory?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  benefits?: string;
  /** @wixFieldType text */
  requirements?: string;
  /** @wixFieldType text */
  contactEmail?: string;
  /** @wixFieldType url */
  learnMoreUrl?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  featuredImage?: string;
}


/**
 * Collection ID: performancemetrics
 * Interface for PerformanceMetrics
 */
export interface PerformanceMetrics {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  metricName?: string;
  /** @wixFieldType number */
  metricValue?: number;
  /** @wixFieldType text */
  metricUnit?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType date */
  dateRecorded?: Date | string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  visualChart?: string;
}


/**
 * Collection ID: programs
 * Interface for Programs
 */
export interface Programs {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  programName?: string;
  /** @wixFieldType text */
  programCategory?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  curriculumDetails?: string;
  /** @wixFieldType text */
  mentorshipApproach?: string;
  /** @wixFieldType text */
  targetCareerPaths?: string;
  /** @wixFieldType text */
  targetClasses?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  programImage?: string;
}


/**
 * Collection ID: programtiers
 * Interface for ProgramTiers
 */
export interface ProgramTiers {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  tierName?: string;
  /** @wixFieldType text */
  classRange?: string;
  /** @wixFieldType text */
  roles?: string;
  /** @wixFieldType text */
  focusAreas?: string;
  /** @wixFieldType text */
  outcome?: string;
}
