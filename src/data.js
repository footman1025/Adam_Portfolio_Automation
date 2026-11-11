import clyngDashboard from './assets/clyng-dashboard.jpg'
import clyngPlaybooks from './assets/clyng-playbooks.jpg'
import aiCallerWorkflow from './assets/ai-caller-workflow.jpg'
import aiCallerCover from './assets/ai-caller-cover.jpg'
import linkedinWorkflow from './assets/linkedin-workflow.jpg'
import crmAutomation from './assets/crm-automation.jpg'
import retailWorkspace from './assets/retail-workspace.jpg'
import nonprofitWorkspace from './assets/nonprofit-workspace.jpg'
import ghlLaunch from './assets/ghl-launch.jpg'
import neuroadsAffiliate from './assets/neuroads-affiliate.jpg'

export const profile = {
  name: 'Adam Harari',
  title: 'Senior AI & Automation Engineer',
  tagline:
    'I help E-commerce, Real Estate and SaaS companies turn messy data and scattered apps into clear dashboards and hands-off workflows.',
  pitch:
    'Clients come to me when they are losing hours pulling reports, copying data between tools, or have no visibility into revenue, churn or product performance. I build systems that give you clarity in minutes, not hours.',
  rate: '$80/hr',
  experience: '8+ years',
}

export const stats = [
  { value: '8+', label: 'Years of experience' },
  { value: '28%', label: 'Churn cut for a subscription brand' },
  { value: '100%', label: 'On-time, milestone-based delivery' },
]

export const services = [
  {
    icon: 'workflow',
    title: 'Workflow Automation',
    text: 'End-to-end automations in n8n, Make, Zapier and Zoho Flow with multi-step logic and solid error handling.',
  },
  {
    icon: 'api',
    title: 'API & App Integrations',
    text: 'Custom API and webhook connections that sync CRMs, forms, payments and databases with no duplicates or lost records.',
  },
  {
    icon: 'bot',
    title: 'AI Agents & Chatbots',
    text: 'Agents on OpenAI, Claude and Gemini that handle support, sales and ops on WhatsApp, Slack or your website.',
  },
  {
    icon: 'docs',
    title: 'RAG & Document AI',
    text: 'LangChain pipelines with Pinecone or Chroma so agents answer from your own documents and extract data at scale.',
  },
  {
    icon: 'crm',
    title: 'CRM & Marketing Automation',
    text: 'Zoho CRM, GoHighLevel and HubSpot pipelines, nurture sequences, lead routing and booking reminders that run on their own.',
  },
  {
    icon: 'database',
    title: 'SQL & Data Engineering',
    text: 'Reliable queries and data models in SQL, Postgres, Snowflake and Supabase that your reporting can trust.',
  },
  {
    icon: 'chart',
    title: 'BI Dashboards',
    text: 'Power BI and Tableau executive dashboards that show revenue, churn and performance at a glance.',
  },
  {
    icon: 'cart',
    title: 'E-commerce Analytics',
    text: 'Shopify, Recharge, Amazon and Walmart data unified into one clear view of sales, subscriptions and products.',
  },
  {
    icon: 'board',
    title: 'Project & Ops Automation',
    text: 'Monday and Airtable boards wired to update tasks, statuses and projects automatically.',
  },
]

export const projects = [
  {
    name: 'Retail Operations Workspace',
    role: 'Workspace Architect',
    category: 'Operations · Notion Workspace',
    icon: 'board',
    blurb:
      'A connected Notion workspace that replaced scattered spreadsheets, notes and paper for day-to-day retail operations.',
    tags: ['Notion', 'Retail', 'Operations'],
    stack: ['Notion', 'Linked Databases', 'Templates', 'Dashboards'],
    description:
      'A connected Notion workspace replaced scattered spreadsheets, notes, and paper. Linked databases, useful views, reusable templates, and a clear home dashboard made day-to-day retail operations navigable for non-technical staff.',
    highlights: [
      'Linked databases replacing scattered spreadsheets, notes and paper',
      'Reusable templates and purpose-built views for daily tasks',
      'A clear home dashboard non-technical staff can actually navigate',
    ],
    images: [
      { src: retailWorkspace, alt: 'Notion retail operations workspace with linked databases and dashboard' },
    ],
  },
  {
    name: 'GoHighLevel Launch System',
    role: 'Automation Engineer',
    category: 'Automation · Course Launches',
    icon: 'workflow',
    blurb:
      'A repeatable launch system for a course business — every campaign scheduled, segmented, tested and monitored end to end.',
    tags: ['GoHighLevel', 'Course Launches', 'Payments'],
    stack: ['GoHighLevel', 'Stripe', 'Zapier', 'Webhooks'],
    description:
      'A repeatable launch-technology system for a course business, connecting GoHighLevel, Stripe, Zapier, email, and SMS. Each campaign is scheduled, segmented, tested through the full customer journey, and monitored during launch.',
    highlights: [
      'GoHighLevel, Stripe, Zapier, email and SMS connected into one launch stack',
      'Every campaign scheduled, segmented and A/B tested through the full customer journey',
      'Live monitoring during launch, from lead to checkout to course access',
    ],
    images: [
      { src: ghlLaunch, alt: 'GoHighLevel course launch campaign connected to Stripe, Zapier and webhooks' },
    ],
  },
  {
    name: 'Affiliate Tracking Setup for NeuroAds',
    role: 'Integration Engineer',
    category: 'E-commerce · AI Chatbot',
    icon: 'cart',
    blurb:
      'Connected affiliate referrals to a multilingual Shopify AI chatbot commerce journey through Shopify data and API integration.',
    tags: ['Shopify', 'Affiliate Tracking', 'AI Chatbot'],
    stack: ['Shopify', 'Affiliate Tracking', 'API Integration', 'AI Chatbot'],
    description:
      'NeuroAds is a multilingual Shopify AI chatbot for product recommendations, store questions, discount codes, order tracking, and live-agent handoff. This engagement connected affiliate referrals to the chatbot-assisted commerce journey through Shopify data, API integration, and performance analysis.',
    highlights: [
      'Affiliate referrals wired into the chatbot-assisted commerce journey',
      'Shopify data and API integration powering referral attribution',
      'Performance analysis across referrals, sales and commissions',
    ],
    images: [
      { src: neuroadsAffiliate, alt: 'NeuroAds Shopify AI chatbot with affiliate tracking dashboard' },
    ],
  },
  {
    name: 'CRM Setup & Automation',
    role: 'Automation Engineer',
    category: 'Automation · CRM',
    icon: 'crm',
    blurb:
      'Leads from every channel into one pipeline, follow-ups that stop when someone replies, reminders that cut no-shows.',
    tags: ['CRM', 'Pipelines', 'Follow-ups'],
    stack: ['HubSpot', 'GoHighLevel', 'Zoho', 'Monday'],
    description:
      'HubSpot, GoHighLevel, Zoho and Monday. Leads from every channel into one pipeline, follow-ups that stop when someone replies, reminders that cut no-shows. We clean up duplicates and dead fields first so the reports are worth reading.',
    highlights: [
      'Every lead channel feeding one clean pipeline',
      'Follow-up sequences that stop automatically when someone replies',
      'Booking reminders that cut no-shows, with duplicates and dead fields cleaned first',
    ],
    images: [
      { src: crmAutomation, alt: 'Leads from every channel flowing into one CRM pipeline' },
    ],
  },
  {
    name: 'Education Nonprofit Workspace',
    role: 'Automation Engineer',
    category: 'Operations · monday.com Workspace',
    icon: 'board',
    blurb:
      'A custom monday.com setup bringing program dates, staff actions, shared resources and overdue work into one system.',
    tags: ['monday.com', 'Nonprofit', 'Calendar Sync'],
    stack: ['monday.com', 'Google Calendar', 'iCal', 'Automations'],
    description:
      'A custom monday.com setup brings program dates, staff actions, shared resources, and overdue work into one system. Google Calendar and iCal sync keep personal calendars aligned, while automations handle weekly summaries and reminders.',
    highlights: [
      'Program dates, staff actions, resources and overdue work in one system',
      'Google Calendar and iCal sync keep personal calendars aligned',
      'Automations send weekly summaries and reminders on their own',
    ],
    images: [
      { src: nonprofitWorkspace, alt: 'monday.com education programs board with calendar sync and automations' },
    ],
  },
  {
    name: 'AI Caller Bot',
    role: 'Developer',
    category: 'Automation · Voice AI',
    icon: 'bot',
    blurb:
      'A full-scale AI calling system that qualifies leads or sells products over the phone — with its own lead search built in.',
    tags: ['Voice AI', 'n8n', 'Lead Qualification'],
    stack: ['n8n', 'OpenAI', 'Supabase', 'Voice AI', 'Webhooks'],
    description:
      'A full-scale AI calling system that qualifies leads or sells products over the phone. Sophisticated backend automation either searches Google for leads on its own or processes lists you upload — a CSV batch pipeline runs calls in parallel, while a chat-driven AI agent orchestrates voice calls, contact processing and lead search sequentially.',
    highlights: [
      'Parallel CSV batch calling with Supabase-backed state',
      'AI agent routing between voice, contact and search sub-workflows',
      'Built-in Google lead search — bring leads or let it find them',
    ],
    images: [
      { src: aiCallerCover, alt: 'AI Caller Bot system: AI routing, CSV and Google lead search into voice calls' },
      { src: aiCallerWorkflow, alt: 'AI Caller Bot master workflow architecture' },
    ],
  },
  {
    name: 'LinkedIn Connection Requester',
    role: 'Developer',
    category: 'Automation · Lead Generation',
    icon: 'crm',
    blurb:
      'Finds exactly the right people and sends each one an AI-personalized LinkedIn connection request, tracked end to end.',
    tags: ['Lead Magnet', 'Outreach', 'PhantomBuster'],
    stack: ['n8n', 'OpenAI', 'Apify', 'PhantomBuster', 'Google Sheets'],
    description:
      'Finds exactly the people you need and sends each one a personalized LinkedIn connection request, so the moment they accept you can strike up a real conversation. It scrapes targeted prospects, loops through each one to generate a personalized message with AI, logs everything to Google Sheets and triggers the outreach — it works for landing jobs or sales. The possibilities are endless.',
    highlights: [
      'Targeted prospect scraping from a simple form submission',
      'AI-personalized message for every single connection request',
      'Google Sheets tracking + automated sending via PhantomBuster',
    ],
    images: [
      { src: linkedinWorkflow, alt: 'LinkedIn outreach automation workflow' },
    ],
  },
  {
    name: 'Clyng.io',
    role: 'End-to-End Engineer',
    category: 'SaaS · Churn Analytics',
    icon: 'chart',
    blurb:
      'Churn monitoring and automated retention playbooks for subscription e-commerce — recover customers before they leave.',
    tags: ['Churn Analytics', 'Retention Playbooks', 'Subscription E-commerce'],
    stack: ['React', 'Supabase', 'n8n', 'Stripe', 'Email & SMS Automation'],
    description:
      'Subscription e-commerce owners struggle with churn, so I built a platform that both monitors it and takes action to retain customers — because keeping a customer is far cheaper than acquiring a new one. Clyng tracks voluntary and involuntary churn, recovered revenue and conversion in a live dashboard, and runs automated retention playbooks that engage at-risk subscribers the moment they cancel.',
    highlights: [
      'Real-time churn & revenue dashboard with 15-minute auto-sync',
      'Automated retention playbooks triggered by cancellations',
      'Recovery attribution across emails, SMS, discounts and calls',
    ],
    images: [
      { src: clyngDashboard, alt: 'Clyng.io live churn and revenue dashboard' },
      { src: clyngPlaybooks, alt: 'Clyng.io automated retention playbooks' },
    ],
  },
]

export const tools = [
  'n8n', 'Make', 'Zapier', 'Zoho', 'Monday', 'GoHighLevel', 'HubSpot',
  'Airtable', 'Supabase', 'Postgres', 'Snowflake', 'Power BI', 'Tableau',
  'OpenAI', 'Claude', 'Gemini', 'LangChain', 'Pinecone', 'Chroma',
]

export const reasons = [
  {
    title: '100% on-time delivery',
    text: 'Milestone-based progress, so you always know where the project stands.',
  },
  {
    title: 'You own everything',
    text: 'All workflows, code and credentials are yours from day one.',
  },
  {
    title: 'Clear documentation',
    text: 'Docs your team can actually run, maintain and extend without me.',
  },
  {
    title: 'Post-launch support',
    text: "I don't disappear after handover — I stay available to keep things running.",
  },
]
