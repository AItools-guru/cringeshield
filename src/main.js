import './style.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// DOM Element Selections
const dom = {
  rawInput: document.getElementById('raw-post-input'),
  charCounter: document.getElementById('char-counter'),
  btnShield: document.getElementById('btn-shield-post'),
  selectFormula: document.getElementById('select-formula'),
  selectTone: document.getElementById('select-tone'),
  
  checkBuzzwords: document.getElementById('check-buzzwords'),
  checkHyphens: document.getElementById('check-hyphens'),
  checkSpacing: document.getElementById('check-spacing'),
  checkHashtags: document.getElementById('check-hashtags'),
  
  btnViewLanding: document.getElementById('btn-view-landing'),
  btnViewApp: document.getElementById('btn-view-app'),
  landingHeroView: document.getElementById('landing-hero-view'),
  appWorkspaceView: document.getElementById('app-workspace-view'),
  btnHeroLaunch: document.getElementById('btn-hero-launch'),
  btnBottomLaunch: document.getElementById('btn-bottom-launch'),

  tabBtnDashboard: document.getElementById('tab-btn-dashboard'),
  tabBtnPreview: document.getElementById('tab-btn-preview'),
  tabBtnDiff: document.getElementById('tab-btn-diff'),
  tabBtnCarousel: document.getElementById('tab-btn-carousel'),
  tabBtnGuide: document.getElementById('tab-btn-guide'),
  
  tabContentDashboard: document.getElementById('tab-content-dashboard'),
  tabContentPreview: document.getElementById('tab-content-preview'),
  tabContentDiff: document.getElementById('tab-content-diff'),
  tabContentCarousel: document.getElementById('tab-content-carousel'),
  tabContentGuide: document.getElementById('tab-content-guide'),
  
  previewAvatar: document.getElementById('preview-avatar'),
  previewName: document.getElementById('preview-name'),
  previewHeadline: document.getElementById('preview-headline'),
  previewPostBody: document.getElementById('preview-post-body'),
  previewSeeMore: document.getElementById('preview-see-more'),
  btnCopyPost: document.getElementById('btn-copy-post'),
  
  cringeGaugeCircle: document.getElementById('cringe-gauge-circle'),
  cringeScoreNum: document.getElementById('cringe-score-num'),
  cringeScoreVerdict: document.getElementById('cringe-score-verdict'),
  
  // Progress Fills
  fillBuzzwords: document.getElementById('fill-buzzwords'),
  fillBroetry: document.getElementById('fill-broetry'),
  fillEmoji: document.getElementById('fill-emoji'),
  fillA11y: document.getElementById('fill-a11y'),
  
  // Value labels
  valBuzzwords: document.getElementById('val-buzzwords'),
  valBroetry: document.getElementById('val-broetry'),
  valEmoji: document.getElementById('val-emoji'),
  valA11y: document.getElementById('val-a11y'),
  
  critiqueIconBuzzwords: document.getElementById('critique-icon-buzzwords'),
  critiqueDescBuzzwords: document.getElementById('critique-desc-buzzwords'),
  critiqueBuzzwordsHighlight: document.getElementById('critique-buzzwords-highlight'),
  
  critiqueIconBroetry: document.getElementById('critique-icon-broetry'),
  critiqueDescBroetry: document.getElementById('critique-desc-broetry'),
  
  critiqueIconFormatting: document.getElementById('critique-icon-formatting'),
  critiqueDescFormatting: document.getElementById('critique-desc-formatting'),
  
  btnOpenSettings: document.getElementById('btn-open-settings'),
  btnCloseSettings: document.getElementById('btn-close-settings'),
  btnSaveSettings: document.getElementById('btn-save-settings'),
  settingsDrawer: document.getElementById('settings-drawer'),
  settingsOverlay: document.getElementById('settings-overlay'),
  loaderOverlay: document.getElementById('loader-overlay'),
  
  inputApiKey: document.getElementById('input-api-key'),
  inputProfileName: document.getElementById('input-profile-name'),
  inputProfileHeadline: document.getElementById('input-profile-headline'),
  inputProfileAvatar: document.getElementById('input-profile-avatar'),
  inputProfileVerified: document.getElementById('input-profile-verified'),
  previewVerifiedBadge: document.getElementById('preview-verified-badge'),
  previewSandboxAlert: document.getElementById('preview-sandbox-alert'),
  
  // Document Stats elements
  statWords: document.getElementById('stat-words'),
  statChars: document.getElementById('stat-chars'),
  statReadtime: document.getElementById('stat-readtime'),
  statReadGrade: document.getElementById('stat-read-grade'),
  
  // Quick format toolbar buttons
  btnToolSpace: document.getElementById('btn-tool-space'),
  btnToolLists: document.getElementById('btn-tool-lists'),
  btnToolDebuzz: document.getElementById('btn-tool-debuzz'),
  btnToolVault: document.getElementById('btn-tool-vault'),
  btnToolClear: document.getElementById('btn-tool-clear'),
  
  // Interactive preview buttons
  btnPreviewLike: document.getElementById('btn-preview-like'),
  previewLikesCount: document.getElementById('preview-likes-count'),

  // Diff Elements
  diffOriginalContent: document.getElementById('diff-original-content'),
  diffFormattedContent: document.getElementById('diff-formatted-content'),

  // Carousel Elements
  carouselThemeSelect: document.getElementById('carousel-theme-select'),
  carouselTitleInput: document.getElementById('carousel-title-input'),
  carouselWatermarkInput: document.getElementById('carousel-watermark-input'),
  btnExportPdf: document.getElementById('btn-export-pdf'),
  btnPrevSlide: document.getElementById('btn-prev-slide'),
  btnNextSlide: document.getElementById('btn-next-slide'),
  carouselSlideIndicator: document.getElementById('carousel-slide-indicator'),
  carouselCardViewport: document.getElementById('carousel-card-viewport'),
  carouselDisplayBrand: document.getElementById('carousel-display-brand'),
  carouselDisplayCounter: document.getElementById('carousel-display-counter'),
  carouselDisplayText: document.getElementById('carousel-display-text'),
  carouselDisplayWatermark: document.getElementById('carousel-display-watermark'),

  // Vault Modal Elements
  btnOpenHooks: document.getElementById('btn-open-hooks'),
  btnCloseHooks: document.getElementById('btn-close-hooks'),
  hooksModal: document.getElementById('hooks-modal'),
  hooksModalOverlay: document.getElementById('hooks-modal-overlay'),
  vaultItemsContainer: document.getElementById('vault-items-container'),
  vaultSearchInput: document.getElementById('vault-search-input'),

  // Drafts Drawer Elements
  btnOpenDrafts: document.getElementById('btn-open-drafts'),
  btnCloseDrafts: document.getElementById('btn-close-drafts'),
  draftsDrawer: document.getElementById('drafts-drawer'),
  draftsDrawerOverlay: document.getElementById('drafts-drawer-overlay'),
  btnNewDraft: document.getElementById('btn-new-draft'),
  btnSaveDraft: document.getElementById('btn-save-draft'),
  btnExportDrafts: document.getElementById('btn-export-drafts'),
  draftsListContainer: document.getElementById('drafts-list-container'),
  draftCountBadge: document.getElementById('draft-count-badge')
};

// Preset Templates Library
const PRESETS = {
  meeting: `Hey everyone! Hope you are crushing your Tuesday! 🔥
Just wanted to flag that we are syncing up today at 3pm for our alignment session.
It is extremely critical that we delve deep into our cross-functional roadmap synergies.
This meeting is a testament to our team's laser focus on unlocking exponential growth.
Let us align, collaborate, and push the needle forward together! 🚀`,
  
  spec: `Here is the comprehensive specification outline for the new notification component:
- The component will utilize a pub-sub model to broadcast messages.
- We must make sure that we write clean code - this will revolutionize our notification architecture.
- Let's schedule 4 separate architecture reviews to align on the database schema.
- We will use an advanced key-value store to cache state for 10ms - optimizing latency.`,
  
  rejected: `Wow. Just got rejected from another job after a grueling 6-round interview process.
They said I was 'too senior' but not 'aligned with current roadmap paradigms.'
To be honest, it is a blessing in disguise.
It is a testament to why we need to disrupt the hiring process.
Here is what this rejection taught me about growth and grit:
1. Rejection is redirection.
2. The universe is preparing you for something bigger.
Stay hungry. Stay foolish. 💡`,
  
  launch: `I am extremely thrilled to announce the official launch of our new product today! 🚀
This tool is a absolute game-changer. It leverages cutting-edge LLMs to seamlessly optimize your workflow.
Our team worked nights to create this masterpiece.
It will completely revolutionize the way product manager write user stories and specs.
Check out the link below to get started and unlock your team's true potential! 👇`
};

// Simulated Refactored Mapped Output Library
const SIMULATED_OUTPUTS = {
  meeting: {
    'hook-value-cta': {
      pragmatic: `Quick update for the engineering team:

We are syncing at 3:00 PM today to review the timeline.

The goal is to resolve blocking dependencies and adjust timelines.

* Focus 1: Map database model changes.
* Focus 2: Confirm sprint deliverables.

Please review the draft spec in Slack beforehand so we can keep the session under 20 minutes.

#softwareengineering #development #teamalignment`,
      storyteller: `Meetings usually suck. But today's team sync is different.

We are gathering at 3:00 PM today to look at our roadmap.

Instead of talking in circles, we are mapping exact database dependencies.

By the end of the 20-minute slot, every developer will have a clear timeline path.

Check the spec draft in Slack beforehand so we can jump straight in.

#productmanagement #roadmap #startups`,
      critic: `Most syncs cost more in developer context switching than they save.

Today at 3:00 PM we are running a strict 20-minute session.

We will analyze the product roadmap timelines to cut project delivery blockages.

We need 100% clarity on deliverables before the sprint starts.

Spec link is in Slack. Review the details beforehand.

#productivity #development #projectmanagement`,
      thoughtleader: `The best teams do not align. They communicate.

We are syncing at 3:00 PM today for a 20-minute sprint check.

* Objective: Audit roadmap tasks.
* Outcome: Remove project blockages.

Alignment is a side effect of good data.

Let's review the spec in Slack first.

#leadership #careers #teamwork`
    }
  },
  spec: {
    'pas': {
      pragmatic: `Tight database coupling in notification systems slows down releases.

It leads to lag spikes, blocked records, and developers fighting migration issues.

We are replacing it with a clean event broker model.

Key architecture changes:
1. Using a key-value store to cache state and cut read loads.
2. Reviewing the schema draft at 4:00 PM today.

Check the spec file in GitHub to review the changes.

#softwareengineering #systemdesign #database`,
      storyteller: `Our notification systems were causing random database lag spikes.

We spent weeks chasing queries before realizing the root cause: tight database coupling.

Every time a notification fired, it locked primary user records.

So we designed a pub-sub model.

We are caching state with a key-value store to keep read latency under 10ms.

Review the full design doc on GitHub.

#softwaredevelopment #startups #growth`,
      critic: `Building systems with synchronous DB calls is an architectural anti-pattern.

It causes database performance lockups as user scale expands.

To optimize latency, we are moving to a pub-sub event broker.

* Strategy: Introduce a key-value caching layer.
* Check: Architecture review is scheduled today at 4:00 PM.

Let's audit the schema in GitHub.

#backend #systemdesign #architecture`,
      thoughtleader: `Scale breaks everything.

Our notification architecture was locking databases and slowing downs page loads.

The solution was not a faster database. It was better decoupling.

We are introducing a key-value caching layer.

* Goal: Optimize latency below 10ms.
* Next: Schema review today at 4:00 PM.

The spec details are in GitHub.

#technology #systems #engineering`
    }
  },
  rejected: {
    'contrarian': {
      pragmatic: `Getting rejected after a 6-round interview loop is excellent feedback.

Most candidates complain about bad hiring pipelines.

But a long, disorganized loop tells you exactly how a company operates. If they cannot make a decision after 6 hours, they will not move fast on product specs either.

Lessons from the pipeline:
1. Fit is mutual; long loops are warning signs.
2. Seniority tags are arbitrary.

If you want to build products, pick companies that execute quickly.

#hiring #careers #productmanagement`,
      storyteller: `6 rounds of interviews. 3 take-home exercises. And then a rejection.

It used to feel like a waste of time.

Now, I look at it as a bullet dodged.

If a company needs 6 rounds to decide if you can write code, they will need 6 months of meetings to decide if you can ship it.

Redirection is just data. Use it to find teams that build.

#jobs #careers #engineering`,
      critic: `A 6-round interview pipeline is a symptom of decision paralysis.

It costs the candidate hours and wastes thousands of dollars in team time.

When companies say you are 'too senior' but lack 'paradigm alignment,' they are hiding a lack of clear role definition.

* Metric 1: 6 hours of interviews is too long.
* Metric 2: Decision cycles should not exceed 2 weeks.

Build things instead of waiting for approvals.

#recruiting #business #productivity`,
      thoughtleader: `Rejection is not personal. It is just alignment.

I spent 6 rounds in an interview loop to be told I was not the right fit.

It taught me that the best companies make decisions fast.

* Action 1: Value your time.
* Action 2: Audit company execution speed during loops.

The best role is where you can ship value, not talk about it.

#leadership #careers #mindset`
    }
  },
  launch: {
    'aida': {
      pragmatic: `Product managers spend 40% of their week writing specs and user stories.

Our new editor drafts structured specs from rough developer notes in seconds.

It eliminates blank page fatigue and gathers constraints automatically.

We just launched the beta version today.

Try it here:
cringeshield.ai/specs

#productmanagement #softwaredevelopment #productivity`,
      storyteller: `I hate writing specs. Every product manager does.

You sit in front of a blank screen trying to remember developer constraints and edge cases.

So we built a tool to solve this.

It takes your rough scratch notes and formats them into structured spec files.

We are opening the beta today.

Check it out at cringeshield.ai/specs and let me know your feedback.

#startups #productmanagement #engineering`,
      critic: `Writing user stories is a manual bottleneck in product development.

It delays engineering starts and introduces translation errors.

We built a spec editor that uses structured schemas to compile requirements in seconds.

* Feature 1: Scans notes for edge cases.
* Feature 2: Outputs clean Markdown files.

Try the beta: cringeshield.ai/specs

#productivity #agile #softwaredevelopment`,
      thoughtleader: `Writing specs is not product management. Talking to users is.

We built a tool to automate spec writing so you can spend time on strategy.

It turns rough thoughts into clean specs in seconds.

* Purpose: Save 10 hours a week.
* Access: Beta is live now.

Check the editor: cringeshield.ai/specs

#leadership #product #productivity`
    }
  }
};

// Corporate AI Buzzwords Dictionary
const BUZZWORDS = [
  'delve', 'testament', 'revolutionize', 'groundbreaking', 'synergy', 'synergies',
  'game-changer', 'game changer', 'unlock', 'tapestry', 'seamless', 'seamlessly',
  'paradigm', 'paradigms', 'leverage', 'elevate', 'dynamic', 'holistic',
  'core competency', 'core competencies', 'paradigm shift', 'push the envelope',
  'think outside the box', 'actionable', 'ecosystem', 'scalability', 'pivot',
  'disruption', 'disrupt', 'robust', 'proactive', 'incentivize', 'optimize',
  'empower', 'curate', 'foster', 'utilize', 'vibrant'
];

// App State
const state = {
  apiKey: localStorage.getItem('cs_api_key') || '',
  profileName: localStorage.getItem('cs_profile_name') || 'Saurabh Shidhore',
  profileHeadline: localStorage.getItem('cs_profile_headline') || 'Product Leader & Builder | Building AI Tools',
  profileAvatar: localStorage.getItem('cs_profile_avatar') || '',
  profileVerified: localStorage.getItem('cs_profile_verified') !== 'false',
  formattedPost: '',
  cringeScore: 0,
  isLiked: false,
  likesCount: 124
};

// Initialize Config
function initConfig() {
  if (state.apiKey) dom.inputApiKey.value = state.apiKey;
  
  if (state.profileName) {
    dom.inputProfileName.value = state.profileName;
    dom.previewName.textContent = state.profileName;
  }
  
  if (state.profileHeadline) {
    dom.inputProfileHeadline.value = state.profileHeadline;
    dom.previewHeadline.textContent = state.profileHeadline;
  }
  
  if (state.profileAvatar) {
    dom.inputProfileAvatar.value = state.profileAvatar;
    updateAvatar(state.profileAvatar);
  }
  
  dom.inputProfileVerified.checked = state.profileVerified;
  toggleVerifiedBadge(state.profileVerified);
  
  // Set initial default preview likes
  dom.previewLikesCount.textContent = state.likesCount;
}

function updateAvatar(url) {
  if (url) {
    dom.previewAvatar.innerHTML = `<img src="${url}" alt="Avatar">`;
  } else {
    dom.previewAvatar.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
  }
}

function toggleVerifiedBadge(visible) {
  if (visible) {
    dom.previewVerifiedBadge.classList.add('visible');
  } else {
    dom.previewVerifiedBadge.classList.remove('visible');
  }
}

function toggleDrawer(open) {
  if (open) {
    dom.settingsDrawer.classList.add('open');
    dom.settingsOverlay.classList.add('open');
  } else {
    dom.settingsDrawer.classList.remove('open');
    dom.settingsOverlay.classList.remove('open');
  }
}

function switchTab(tabId) {
  const tabs = ['dashboard', 'preview', 'diff', 'carousel', 'guide'];
  tabs.forEach(t => {
    const btn = dom[`tabBtn${t.charAt(0).toUpperCase() + t.slice(1)}`];
    const content = dom[`tabContent${t.charAt(0).toUpperCase() + t.slice(1)}`];
    if (btn && content) {
      if (t === tabId) {
        btn.classList.add('active');
        content.classList.add('active');
      } else {
        btn.classList.remove('active');
        content.classList.remove('active');
      }
    }
  });

  if (tabId === 'diff') {
    renderDiffView(dom.rawInput.value, state.formattedPost || dom.rawInput.value);
  } else if (tabId === 'carousel') {
    updateCarouselSlides(state.formattedPost || dom.rawInput.value);
  }
}

// Syllable Counter Helper for Flesch-Kincaid
function countSyllables(word) {
  word = word.toLowerCase().trim();
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  const syllables = word.match(/[aeiouy]{1,2}/g);
  return syllables ? syllables.length : 1;
}

// Flesch-Kincaid Grade Calculator
function calculateReadability(text) {
  if (!text || text.trim() === '') return { grade: '8.0', status: 'Optimal', color: 'var(--color-cyber-green)' };
  const words = text.trim().split(/\s+/).filter(w => w.length > 0);
  if (words.length === 0) return { grade: '8.0', status: 'Optimal', color: 'var(--color-cyber-green)' };
  
  const sentences = text.split(/[.!?]+\s+/).filter(s => s.trim().length > 0);
  const sentenceCount = Math.max(sentences.length, 1);
  
  let totalSyllables = 0;
  words.forEach(w => {
    totalSyllables += countSyllables(w);
  });
  
  const grade = (0.39 * (words.length / sentenceCount)) + (11.8 * (totalSyllables / words.length)) - 15.59;
  const roundedGrade = Math.max(1, Math.min(18, Math.round(grade * 10) / 10));
  
  let status = 'Optimal';
  let color = 'var(--color-cyber-green)';
  if (roundedGrade > 12) {
    status = 'Academic';
    color = 'var(--color-cyber-orange)';
  } else if (roundedGrade > 15) {
    status = 'Dense';
    color = 'var(--color-cyber-pink)';
  }
  
  return { grade: roundedGrade.toFixed(1), status, color };
}

// Stats & Telemetry Calculator
function calculateStats(text) {
  const charCount = text.length;
  const words = text.trim().split(/\s+/).filter(w => w.length > 0);
  const wordCount = words.length;
  
  // Assume average reading speed of 200 WPM
  const readTimeSeconds = Math.ceil((wordCount / 200) * 60);
  const readability = calculateReadability(text);
  
  dom.statWords.textContent = wordCount;
  dom.statChars.textContent = charCount;
  dom.statReadtime.textContent = charCount > 0 ? readTimeSeconds : 0;
  dom.statReadGrade.textContent = `${readability.grade} (${readability.status})`;
  dom.statReadGrade.style.color = readability.color;
  
  if (charCount > 3000) {
    dom.statChars.style.color = 'var(--color-cyber-pink)';
  } else {
    dom.statChars.style.color = 'var(--color-cyber-cyan)';
  }
}

// Cringe Analyzer Logic
function analyzeCringe(text) {
  if (!text || text.trim() === '') {
    updateGauge(0);
    resetDiagnostics();
    updateTelemetryBars(0, 0, 0, 0);
    return 0;
  }

  const cleanText = text.trim();
  const words = cleanText.split(/\s+/).filter(w => w.length > 0);
  const totalWordsCount = words.length;

  let totalScore = 0;

  // 1. Buzzword Scan
  const detectedBuzzwords = [];
  BUZZWORDS.forEach(buzz => {
    const regex = new RegExp(`\\b${buzz}\\b`, 'gi');
    const matches = cleanText.match(regex);
    if (matches) {
      detectedBuzzwords.push({ word: buzz, count: matches.length });
    }
  });

  const uniqueBuzzwordsCount = detectedBuzzwords.length;
  // Calculate category value
  const buzzwordPercent = Math.min((uniqueBuzzwordsCount / 5) * 100, 100);
  totalScore += Math.min(uniqueBuzzwordsCount * 10, 50);

  // 2. Spacing / Broetry Evaluator
  const paragraphs = cleanText.split(/\n+/).filter(p => p.trim().length > 0);
  const paragraphCount = paragraphs.length;
  const avgWordsPerPara = paragraphCount > 0 ? totalWordsCount / paragraphCount : 0;
  
  let isBroetry = false;
  let broetryPercent = 0;
  if (paragraphCount >= 4 && avgWordsPerPara < 10) {
    isBroetry = true;
    totalScore += 20;
    broetryPercent = 100;
  } else if (paragraphCount >= 3 && avgWordsPerPara < 13) {
    broetryPercent = 60;
    totalScore += 10;
  }

  // 3. Emoji density check
  const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{1F1E0}-\u{1F1FF}]/gu;
  const emojiMatches = cleanText.match(emojiRegex) || [];
  const emojiCount = emojiMatches.length;
  const emojiRatio = totalWordsCount > 0 ? (emojiCount / totalWordsCount) * 100 : 0;

  let emojiCringe = false;
  let emojiPercent = Math.min((emojiCount / 6) * 100, 100);
  if (emojiCount > 6 || emojiRatio > 6) {
    emojiCringe = true;
    totalScore += 15;
  }

  // 4. Unicode Formatting check (Accessibility warning) & Hashtags
  const unicodeFontRegex = /[\u{1D400}-\u{1D7FF}]/u;
  const hasUnicodeFonts = unicodeFontRegex.test(cleanText);
  
  const hashtags = cleanText.match(/#[a-zA-Z0-9_]+/g) || [];
  const hashtagCount = hashtags.length;
  
  let hashtagIssues = false;
  let a11yPercent = 0;
  
  if (hasUnicodeFonts) {
    totalScore += 15;
    a11yPercent += 50;
  }
  if (hashtagCount > 5) {
    totalScore += 10;
    a11yPercent += 30;
    hashtagIssues = true;
  }
  
  const lines = cleanText.split('\n');
  let hashtagsInMiddle = false;
  if (hashtagCount > 0) {
    for (let i = 0; i < lines.length - 2; i++) {
      if (lines[i].includes('#')) {
        hashtagsInMiddle = true;
        break;
      }
    }
  }
  if (hashtagsInMiddle) {
    totalScore += 10;
    a11yPercent += 20;
    hashtagIssues = true;
  }

  const finalScore = Math.min(totalScore, 100);
  
  // Update UI Elements
  updateGauge(finalScore);
  updateTelemetryBars(buzzwordPercent, broetryPercent, emojiPercent, a11yPercent);
  
  updateDiagnosticsUI({
    detectedBuzzwords,
    isBroetry,
    paragraphCount,
    avgWordsPerPara,
    emojiCount,
    emojiRatio,
    emojiCringe,
    hasUnicodeFonts,
    hashtagCount,
    hashtagIssues,
    hashtagsInMiddle
  });

  return finalScore;
}

function updateGauge(score) {
  dom.cringeScoreNum.textContent = `${score}%`;
  
  const offset = 440 - (440 * score) / 100;
  dom.cringeGaugeCircle.style.strokeDashoffset = offset;
  
  let color = 'var(--color-cyber-green)';
  let verdict = 'Clean';
  
  if (score > 60) {
    color = 'var(--color-cyber-pink)';
    verdict = 'Critical Cringe';
    dom.cringeGaugeCircle.style.stroke = 'var(--color-cyber-pink)';
  } else if (score > 30) {
    color = 'var(--color-cyber-orange)';
    verdict = 'Mildly Cringey';
    dom.cringeGaugeCircle.style.stroke = 'var(--color-cyber-orange)';
  } else {
    dom.cringeGaugeCircle.style.stroke = 'var(--color-cyber-green)';
  }
  
  dom.cringeScoreVerdict.textContent = verdict;
  dom.cringeScoreVerdict.style.color = color;
}

// Update Telemetry Progress bar widths
function updateTelemetryBars(buzz, bro, emoji, a11y) {
  dom.fillBuzzwords.style.width = `${buzz}%`;
  dom.valBuzzwords.textContent = `${Math.round(buzz)}%`;
  
  dom.fillBroetry.style.width = `${bro}%`;
  dom.valBroetry.textContent = `${Math.round(bro)}%`;
  
  dom.fillEmoji.style.width = `${emoji}%`;
  dom.valEmoji.textContent = `${Math.round(emoji)}%`;
  
  dom.fillA11y.style.width = `${a11y}%`;
  dom.valA11y.textContent = `${Math.round(a11y)}%`;
}

function updateDiagnosticsUI(data) {
  // 1. Buzzwords Card
  if (data.detectedBuzzwords.length > 0) {
    dom.critiqueIconBuzzwords.textContent = '×';
    dom.critiqueIconBuzzwords.className = 'critique-icon fail';
    dom.critiqueDescBuzzwords.textContent = `Found ${data.detectedBuzzwords.length} unique AI buzzwords. They make your post feel written by a robotic PR agency.`;
    dom.critiqueBuzzwordsHighlight.innerHTML = data.detectedBuzzwords.map(b => 
      `<span class="buzzword-tag">${b.word}</span>`
    ).join('');
  } else {
    dom.critiqueIconBuzzwords.textContent = '✓';
    dom.critiqueIconBuzzwords.className = 'critique-icon pass';
    dom.critiqueDescBuzzwords.textContent = 'No generic AI buzzwords detected. Clean draft!';
    dom.critiqueBuzzwordsHighlight.innerHTML = '';
  }

  // 2. Broetry Card
  if (data.isBroetry) {
    dom.critiqueIconBroetry.textContent = '⚠️';
    dom.critiqueIconBroetry.className = 'critique-icon warn';
    dom.critiqueDescBroetry.textContent = `High "Broetry" density! You have ${data.paragraphCount} lines with an average of only ${Math.round(data.avgWordsPerPara)} words per line. Break up lists with clean bullet tokens instead.`;
  } else {
    dom.critiqueIconBroetry.textContent = '✓';
    dom.critiqueIconBroetry.className = 'critique-icon pass';
    dom.critiqueDescBroetry.textContent = 'Readable formatting. Spacing splits paragraphs at standard intervals.';
  }

  // 3. Emojis and formatting Card
  if (data.hasUnicodeFonts || data.emojiCringe || data.hashtagIssues) {
    dom.critiqueIconFormatting.textContent = '⚠️';
    dom.critiqueIconFormatting.className = 'critique-icon warn';
    
    let messages = [];
    if (data.hasUnicodeFonts) {
      messages.push('Unicode styled fonts (bold/italic hacks) are unreadable by screen-readers.');
    }
    if (data.emojiCringe) {
      messages.push(`Excessive emojis (${data.emojiCount} count, ${Math.round(data.emojiRatio)}% density) look cluttered.`);
    }
    if (data.hashtagIssues) {
      if (data.hashtagsInMiddle) {
        messages.push('Hashtags placed in mid-sentence disrupt text flow.');
      } else {
        messages.push(`Too many hashtags (${data.hashtagCount}). Keep it clean to 3-4 bottom tags.`);
      }
    }
    dom.critiqueDescFormatting.textContent = messages.join(' ');
  } else {
    dom.critiqueIconFormatting.textContent = '✓';
    dom.critiqueIconFormatting.className = 'critique-icon pass';
    dom.critiqueDescFormatting.textContent = 'No accessibility issues. Emoji and hashtag densities are optimal.';
  }
}

function resetDiagnostics() {
  dom.critiqueIconBuzzwords.textContent = '✓';
  dom.critiqueIconBuzzwords.className = 'critique-icon pass';
  dom.critiqueDescBuzzwords.textContent = 'No generic buzzwords detected. Clean draft.';
  dom.critiqueBuzzwordsHighlight.innerHTML = '';
  
  dom.critiqueIconBroetry.textContent = '✓';
  dom.critiqueIconBroetry.className = 'critique-icon pass';
  dom.critiqueDescBroetry.textContent = 'Excellent readability. Sentence structures look organic.';
  
  dom.critiqueIconFormatting.textContent = '✓';
  dom.critiqueIconFormatting.className = 'critique-icon pass';
  dom.critiqueDescFormatting.textContent = 'Normal emoji density and clean spacing tags. No accessibility issues.';
}

// Local Fallback Refactor Utilities
function runLocalDeBuzz(text) {
  let cleaned = text;
  BUZZWORDS.forEach(buzz => {
    const replacements = {
      'delve': 'go', 'testament': 'proof', 'revolutionize': 'improve', 'revolutionized': 'improved',
      'groundbreaking': 'new', 'synergy': 'teamwork', 'synergies': 'teamwork', 'game-changer': 'useful tool',
      'game changer': 'useful tool', 'unlock': 'start', 'tapestry': 'mix', 'seamless': 'simple',
      'seamlessly': 'easily', 'paradigm': 'model', 'leverage': 'use', 'elevate': 'help',
      'dynamic': 'active', 'robust': 'strong', 'optimize': 'tune', 'empower': 'help',
      'utilize': 'use', 'vibrant': 'bright', 'foster': 'build'
    };
    const rep = replacements[buzz.toLowerCase()];
    if (rep) {
      const regex = new RegExp(`\\b${buzz}\\b`, 'gi');
      cleaned = cleaned.replace(regex, rep);
    }
  });
  return cleaned;
}

function runLocalAutoSpace(text) {
  // First, strip all consecutive spaces/lines into single line breaks
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  // Re-join with double newlines
  return lines.join('\n\n');
}

function runLocalCleanLists(text) {
  // Convert starting hyphens/dashes to standard bullets
  let cleaned = text.replace(/^\s*[-•]\s+/gm, '* ');
  // Convert compound hyphens to double spaces
  cleaned = cleaned.replace(/(\w+)-(\w+)/g, '$1 $2');
  return cleaned;
}

// Offline fallback generator
function fallbackLocalRefactor(text, formula, tone, constraints) {
  let cleaned = text;
  
  if (constraints.buzzwords) {
    cleaned = runLocalDeBuzz(cleaned);
  }
  if (constraints.hyphens) {
    cleaned = runLocalCleanLists(cleaned);
  }
  if (constraints.spacing) {
    cleaned = runLocalAutoSpace(cleaned);
  }
  if (constraints.hashtags) {
    const hashtags = cleaned.match(/#[a-zA-Z0-9_]+/g) || [];
    cleaned = cleaned.replace(/#[a-zA-Z0-9_]+/g, '');
    const defaultTags = ['#building', '#product', '#engineering'];
    const chosenTags = hashtags.slice(0, 3).length >= 2 ? hashtags.slice(0, 3) : defaultTags;
    cleaned = cleaned.trim() + '\n\n' + chosenTags.join(' ');
  }

  return cleaned.trim();
}

// Preset matching fallback
function runSimulatorRefactor(text, formula, tone) {
  let detectedPreset = null;
  const normalizedInput = text.trim().toLowerCase();
  
  if (normalizedInput.includes('crushing your tuesday') || normalizedInput.includes('alignment session')) {
    detectedPreset = 'meeting';
  } else if (normalizedInput.includes('notification component') || normalizedInput.includes('pub-sub model')) {
    detectedPreset = 'spec';
  } else if (normalizedInput.includes('rejected from another job') || normalizedInput.includes('interview process')) {
    detectedPreset = 'rejected';
  } else if (normalizedInput.includes('thrilled to announce') || normalizedInput.includes('official launch')) {
    detectedPreset = 'launch';
  }

  if (detectedPreset) {
    const presetResults = SIMULATED_OUTPUTS[detectedPreset];
    if (presetResults) {
      const selectedForm = presetResults[formula] ? formula : Object.keys(presetResults)[0];
      const toneResults = presetResults[selectedForm];
      if (toneResults) {
        const selectedTone = toneResults[tone] ? tone : Object.keys(toneResults)[0];
        return { text: toneResults[selectedTone], isPreset: true };
      }
    }
  }

  const constraints = {
    buzzwords: dom.checkBuzzwords.checked,
    hyphens: dom.checkHyphens.checked,
    spacing: dom.checkSpacing.checked,
    hashtags: dom.checkHashtags.checked
  };
  return { text: fallbackLocalRefactor(text, formula, tone, constraints), isPreset: false };
}

// Gemini API Caller
async function callGeminiApi(text, formula, tone, constraints) {
  const apiKey = state.apiKey;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  const systemPrompt = `You are a world-class LinkedIn Copywriting specialist and De-Cringer.
Your mission is to take the user's raw, messy, or robotic draft post and refactor it into an engaging, human, high-impact LinkedIn post.

STRICT CONSTRAINTS:
1. Do NOT use typical AI buzzwords or filler words: "delve", "testament", "revolutionize", "groundbreaking", "synergy", "game-changer", "unlock", "tapestry", "seamless", "paradigm", "leverage", "elevate", "dynamic", "holistic", "foster", "empower".
2. Keep the post grounded. Sound like an active practitioner, builder, or creator. Write in a conversational, professional tone.
3. Formulate the post structure using the "${formula.toUpperCase()}" copywriting layout.
4. Adapt the post to the "${tone.toUpperCase()}" persona style.
5. Spacing constraints: ${constraints.spacing ? 'Add empty double-newlines between every single sentence/paragraph so it is highly readable on mobile screens.' : 'Use standard paragraph spacing.'}
6. List formatting constraints: ${constraints.hyphens ? 'Do NOT use hyphen characters ("-") for bulleted lists or anywhere in the post. Instead, use numbered lists (1, 2, 3), asterisks (*), or clean bullet emojis.' : 'Use standard list symbols.'}
7. Hashtag constraints: ${constraints.hashtags ? 'Provide exactly 3 to 4 relevant hashtags placed exclusively at the very bottom of the post caption.' : 'Do not add hashtags.'}
8. Do NOT use mathematical Unicode symbols for bold/italic text (as they break screen-reader accessibility). Use standard uppercase headers or lists for emphasis.

Format the output strictly as plain text containing only the de-cringed, formatted post. Do not include markdown code fences or conversational introductions.`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [
          { text: systemPrompt },
          { text: `Raw draft to refactor:\n\n${text}` }
        ]
      }]
    })
  });

  if (!response.ok) {
    const errorBody = await response.json();
    throw new Error(errorBody.error?.message || 'Gemini API call failed.');
  }

  const result = await response.json();
  const rawOutput = result.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawOutput) {
    throw new Error('Empty response from Gemini API.');
  }

  return rawOutput.trim();
}

function calculateSeeMore() {
  const bodyEl = dom.previewPostBody;
  const text = bodyEl.textContent || '';
  const paragraphs = text.split('\n');
  
  if (text.length > 140 || paragraphs.length > 3) {
    bodyEl.classList.add('collapsed');
    dom.previewSeeMore.classList.remove('hidden');
    dom.previewSeeMore.textContent = '...see more';
  } else {
    bodyEl.classList.remove('collapsed');
    dom.previewSeeMore.classList.add('hidden');
  }
}

// Main Trigger Refactor
async function refactorPost() {
  const inputText = dom.rawInput.value;
  if (!inputText || inputText.trim() === '') {
    alert('Please enter a draft first!');
    return;
  }

  dom.loaderOverlay.classList.add('active');
  
  const formula = dom.selectFormula.value;
  const tone = dom.selectTone.value;
  const constraints = {
    buzzwords: dom.checkBuzzwords.checked,
    hyphens: dom.checkHyphens.checked,
    spacing: dom.checkSpacing.checked,
    hashtags: dom.checkHashtags.checked
  };

  try {
    let outputText = '';
    let showSandboxAlert = false;
    
    if (state.apiKey) {
      outputText = await callGeminiApi(inputText, formula, tone, constraints);
      showSandboxAlert = false;
    } else {
      console.log('API Key not set. Running in Simulator Mode...');
      await new Promise(resolve => setTimeout(resolve, 1200));
      const result = runSimulatorRefactor(inputText, formula, tone);
      outputText = result.text;
      showSandboxAlert = !result.isPreset;
    }

    state.formattedPost = outputText;
    dom.previewPostBody.textContent = outputText;
    
    // Switch to preview
    switchTab('preview');
    calculateSeeMore();
    
    // Toggle Sandbox Alert display
    if (showSandboxAlert) {
      dom.previewSandboxAlert.style.display = 'flex';
    } else {
      dom.previewSandboxAlert.style.display = 'none';
    }
    
    // Evaluate clean score
    analyzeCringe(outputText);

  } catch (error) {
    console.error('Error shielding post:', error);
    alert(`Shielding failed: ${error.message}. Running Simulator fallback...`);
    const result = runSimulatorRefactor(inputText, formula, tone);
    const outputText = result.text;
    state.formattedPost = outputText;
    dom.previewPostBody.textContent = outputText;
    switchTab('preview');
    calculateSeeMore();
    
    if (!state.apiKey && !result.isPreset) {
      dom.previewSandboxAlert.style.display = 'flex';
    } else {
      dom.previewSandboxAlert.style.display = 'none';
    }
    
    analyzeCringe(outputText);
  } finally {
    dom.loaderOverlay.classList.remove('active');
  }
}

// ==========================================================================
// 1. Diff Visualizer Engine
// ==========================================================================
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

function renderDiffView(originalText, formattedText) {
  if (!originalText || originalText.trim() === '') {
    dom.diffOriginalContent.textContent = 'Paste a draft and click "Shield Post" to analyze changes...';
    dom.diffFormattedContent.textContent = 'Shielded version highlights will show here...';
    return;
  }
  
  const origLines = originalText.trim().split('\n');
  const formLines = (formattedText || originalText).trim().split('\n');
  
  // Highlight removed buzzwords in original text line by line
  let origMarkup = origLines.map(line => {
    if (!line.trim()) return '<br>';
    const words = line.split(/\s+/);
    return words.map(w => {
      const clean = w.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (BUZZWORDS.includes(clean)) {
        return `<span class="diff-del-word">${escapeHtml(w)}</span>`;
      }
      return escapeHtml(w);
    }).join(' ');
  }).join('<br>');

  // Highlight newly added terms in formatted output line by line
  const origWordSet = new Set(originalText.toLowerCase().split(/\s+/));
  let formMarkup = formLines.map(line => {
    if (!line.trim()) return '<br>';
    const words = line.split(/\s+/);
    return words.map(w => {
      const clean = w.toLowerCase();
      if (!origWordSet.has(clean) && clean.length > 2) {
        return `<span class="diff-add-word">${escapeHtml(w)}</span>`;
      }
      return escapeHtml(w);
    }).join(' ');
  }).join('<br>');
  
  dom.diffOriginalContent.innerHTML = origMarkup;
  dom.diffFormattedContent.innerHTML = formMarkup;
}

// ==========================================================================
// 2. 1-Click PDF Carousel Generator
// ==========================================================================
let currentSlideIndex = 0;
let carouselSlides = [];

function updateCarouselSlides(text) {
  if (!text || text.trim() === '') {
    carouselSlides = ["Your shielded post content will split into carousel slides here..."];
  } else {
    const paragraphs = text.trim().split(/\n\n+/).filter(p => p.trim().length > 0);
    carouselSlides = paragraphs.length > 1 ? paragraphs : [text];
  }
  currentSlideIndex = 0;
  renderCurrentSlide();
}

function renderCurrentSlide() {
  const total = carouselSlides.length;
  if (currentSlideIndex >= total) currentSlideIndex = total - 1;
  if (currentSlideIndex < 0) currentSlideIndex = 0;
  
  dom.carouselDisplayCounter.textContent = `${currentSlideIndex + 1}/${total}`;
  dom.carouselSlideIndicator.textContent = `Slide ${currentSlideIndex + 1} of ${total}`;
  
  const textContent = carouselSlides[currentSlideIndex] || '';
  dom.carouselDisplayText.textContent = textContent;
  
  // Auto-font sizing for slide body fit
  if (textContent.length > 220) {
    dom.carouselDisplayText.style.fontSize = '0.9rem';
  } else {
    dom.carouselDisplayText.style.fontSize = '1.05rem';
  }
  
  dom.carouselDisplayBrand.textContent = dom.carouselTitleInput.value || 'CringeShield';
  dom.carouselDisplayWatermark.textContent = dom.carouselWatermarkInput.value || '@saurabhshidhore';
  
  const theme = dom.carouselThemeSelect.value;
  dom.carouselCardViewport.className = `carousel-card theme-${theme}`;
}

async function exportCarouselPdf() {
  if (!carouselSlides || carouselSlides.length === 0) {
    alert('No slides to export!');
    return;
  }
  
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [320, 400]
  });
  
  const originalIndex = currentSlideIndex;
  
  for (let i = 0; i < carouselSlides.length; i++) {
    currentSlideIndex = i;
    renderCurrentSlide();
    await new Promise(resolve => setTimeout(resolve, 60));
    
    const canvas = await html2canvas(dom.carouselCardViewport, { scale: 2 });
    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    
    if (i > 0) pdf.addPage([320, 400], 'portrait');
    pdf.addImage(imgData, 'JPEG', 0, 0, 320, 400);
  }
  
  pdf.save(`cringeshield-carousel-${Date.now()}.pdf`);
  currentSlideIndex = originalIndex;
  renderCurrentSlide();
}

// ==========================================================================
// 3. Viral Hook & CTA Vault Modal
// ==========================================================================
const HOOK_VAULT = {
  curiosity: [
    "Most teams celebrate feature launches. Here is why we track the features users abandon...",
    "I spent 30 days auditing our team's meeting frequency. Here are 3 brutal truths:",
    "Stop telling your audience what your product does. Start showing them what it eliminates.",
    "90% of SaaS products fail not because of tech, but because of this silent UX killer:",
    "We cut our sprint backlog in half last week. The secret was surprisingly simple:"
  ],
  data: [
    "We analyzed 500+ user onboardings. Here are the 3 metrics that actually predict retention:",
    "80% of feature requests come from your 5% loudest users. Here is how we filter signal from noise:",
    "Our team tested 4 different sprint frameworks. Here is the exact data on what worked:",
    "The average developer loses 2.5 hours a day to context switching. Here is our mitigation plan:"
  ],
  contrarian: [
    "Unpopular opinion: Daily standups are usually a sign of bad async communication.",
    "Stop optimizing for velocity. Optimize for feature adoption.",
    "Your product roadmap shouldn't be a list of features—it should be a list of problems to solve.",
    "Adding AI to your product won't fix a broken core user flow."
  ],
  story: [
    "3 years ago, we shipped a feature that zero users asked for. Here is what happened:",
    "Last month, I made a $10,000 architectural mistake. Here is what it taught me about system design:",
    "When we launched our first MVP, nobody signed up. Here is how we pivoted:"
  ],
  cta: [
    "What is your team's biggest operational bottleneck this quarter? Drop your thoughts below 👇",
    "How does your team handle feature adoption tracking? Let's discuss in the comments.",
    "If you found this breakdown useful, repost it to help another builder in your network 🔄",
    "Want our full product spec template? Comment 'SPEC' and I'll send it directly to your DMs."
  ]
};

let currentVaultCategory = 'curiosity';

function toggleHooksModal(open) {
  if (open) {
    dom.hooksModal.classList.add('open');
    dom.hooksModalOverlay.classList.add('open');
    renderVaultItems();
  } else {
    dom.hooksModal.classList.remove('open');
    dom.hooksModalOverlay.classList.remove('open');
  }
}

function renderVaultItems() {
  const items = HOOK_VAULT[currentVaultCategory] || [];
  const query = (dom.vaultSearchInput.value || '').toLowerCase().trim();
  const filtered = items.filter(item => item.toLowerCase().includes(query));
  
  if (filtered.length === 0) {
    dom.vaultItemsContainer.innerHTML = '<div style="color: var(--color-text-secondary); font-size: 0.8rem; padding: 1rem; text-align: center;">No matching hook templates found.</div>';
    return;
  }
  
  const btnLabel = currentVaultCategory === 'cta' ? 'Append CTA' : 'Insert Hook';
  
  dom.vaultItemsContainer.innerHTML = filtered.map(item => `
    <div class="vault-card">
      <div class="vault-card-text">${escapeHtml(item)}</div>
      <button class="btn-use-vault" data-text="${escapeHtml(item)}">${btnLabel}</button>
    </div>
  `).join('');
  
  dom.vaultItemsContainer.querySelectorAll('.btn-use-vault').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemText = btn.getAttribute('data-text');
      if (itemText) {
        const currentVal = dom.rawInput.value;
        if (currentVaultCategory === 'cta') {
          dom.rawInput.value = currentVal ? (currentVal.trim() + '\n\n' + itemText) : itemText;
        } else {
          dom.rawInput.value = currentVal ? (itemText + '\n\n' + currentVal.trim()) : itemText;
        }
        dom.rawInput.dispatchEvent(new Event('input'));
        toggleHooksModal(false);
      }
    });
  });
}

// ==========================================================================
// 4. Local Workspace Drafts Manager
// ==========================================================================
function getDrafts() {
  try {
    return JSON.parse(localStorage.getItem('cs_workspace_drafts') || '[]');
  } catch(e) {
    return [];
  }
}

function saveDrafts(drafts) {
  localStorage.setItem('cs_workspace_drafts', JSON.stringify(drafts));
  updateDraftCountBadge();
}

function updateDraftCountBadge() {
  const count = getDrafts().length;
  dom.draftCountBadge.textContent = count;
}

function toggleDraftsDrawer(open) {
  if (open) {
    dom.draftsDrawer.classList.add('open');
    dom.draftsDrawerOverlay.classList.add('open');
    renderDraftsList();
  } else {
    dom.draftsDrawer.classList.remove('open');
    dom.draftsDrawerOverlay.classList.remove('open');
  }
}

function saveCurrentDraft() {
  const text = dom.rawInput.value;
  if (!text || text.trim() === '') {
    alert('Cannot save an empty draft!');
    return;
  }
  const drafts = getDrafts();
  const newDraft = {
    id: 'draft_' + Date.now(),
    text: text,
    formatted: state.formattedPost || '',
    title: text.trim().substring(0, 32) + '...',
    updatedAt: new Date().toLocaleDateString()
  };
  drafts.unshift(newDraft);
  saveDrafts(drafts);
  renderDraftsList();
  alert('Draft saved to local workspace!');
}

function exportAllDrafts() {
  const drafts = getDrafts();
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(drafts, null, 2));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", `cringeshield_drafts_${Date.now()}.json`);
  dlAnchorElem.click();
}

function renderDraftsList() {
  const drafts = getDrafts();
  updateDraftCountBadge();
  if (drafts.length === 0) {
    dom.draftsListContainer.innerHTML = '<div style="color: var(--color-text-secondary); font-size: 0.8rem; text-align: center; padding: 1.5rem;">No saved drafts yet. Click "Save Current" to add one.</div>';
    return;
  }
  
  dom.draftsListContainer.innerHTML = drafts.map(d => `
    <div class="draft-card" data-id="${d.id}">
      <div class="draft-card-header">
        <div class="draft-title">${escapeHtml(d.title)}</div>
        <div class="draft-actions">
          <button class="btn-draft-action btn-load-draft" data-id="${d.id}">Load</button>
          <button class="btn-draft-action btn-del-draft" data-id="${d.id}">Del</button>
        </div>
      </div>
      <div style="font-size: 0.7rem; color: var(--color-text-secondary);">${d.updatedAt} • ${d.text.length} chars</div>
    </div>
  `).join('');
  
  dom.draftsListContainer.querySelectorAll('.btn-load-draft').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const found = getDrafts().find(item => item.id === id);
      if (found) {
        dom.rawInput.value = found.text;
        state.formattedPost = found.formatted || found.text;
        dom.previewPostBody.textContent = state.formattedPost;
        dom.rawInput.dispatchEvent(new Event('input'));
        renderDiffView(found.text, state.formattedPost);
        updateCarouselSlides(state.formattedPost);
        toggleDraftsDrawer(false);
      }
    });
  });

  dom.draftsListContainer.querySelectorAll('.btn-del-draft').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const filtered = getDrafts().filter(item => item.id !== id);
      saveDrafts(filtered);
      renderDraftsList();
    });
  });
}

// Copy Post
function setupCopyHandler() {
  dom.btnCopyPost.addEventListener('click', () => {
    if (!state.formattedPost) {
      alert('No formatted text to copy!');
      return;
    }
    
    navigator.clipboard.writeText(state.formattedPost)
      .then(() => {
        const originalText = dom.btnCopyPost.innerHTML;
        dom.btnCopyPost.innerHTML = '✓ Copied!';
        dom.btnCopyPost.style.background = 'var(--color-cyber-green)';
        dom.btnCopyPost.style.borderColor = 'var(--color-cyber-green)';
        dom.btnCopyPost.style.color = '#050608';
        
        setTimeout(() => {
          dom.btnCopyPost.innerHTML = originalText;
          dom.btnCopyPost.style.background = 'var(--color-accent)';
          dom.btnCopyPost.style.borderColor = 'var(--color-accent)';
          dom.btnCopyPost.style.color = '#040508';
        }, 2000);
      })
      .catch(err => {
        console.error('Copy failed: ', err);
        alert('Failed to copy.');
      });
  });
}

// Quick Toolbar Setup
function setupToolbarHandlers() {
  dom.btnToolSpace.addEventListener('click', () => {
    const txt = dom.rawInput.value;
    if (txt) {
      dom.rawInput.value = runLocalAutoSpace(txt);
      dom.rawInput.dispatchEvent(new Event('input'));
    }
  });

  dom.btnToolLists.addEventListener('click', () => {
    const txt = dom.rawInput.value;
    if (txt) {
      dom.rawInput.value = runLocalCleanLists(txt);
      dom.rawInput.dispatchEvent(new Event('input'));
    }
  });

  dom.btnToolDebuzz.addEventListener('click', () => {
    const txt = dom.rawInput.value;
    if (txt) {
      dom.rawInput.value = runLocalDeBuzz(txt);
      dom.rawInput.dispatchEvent(new Event('input'));
    }
  });

  dom.btnToolVault.addEventListener('click', () => {
    toggleHooksModal(true);
  });

  dom.btnToolClear.addEventListener('click', () => {
    dom.rawInput.value = '';
    dom.rawInput.dispatchEvent(new Event('input'));
  });
}

// Like Engagement Button Setup
function setupLikeHandler() {
  dom.btnPreviewLike.addEventListener('click', () => {
    state.isLiked = !state.isLiked;
    
    if (state.isLiked) {
      state.likesCount += 1;
      dom.btnPreviewLike.classList.add('active');
    } else {
      state.likesCount -= 1;
      dom.btnPreviewLike.classList.remove('active');
    }
    
    dom.previewLikesCount.textContent = state.likesCount;
  });
}

// Event Bindings
function setupEventListeners() {
  dom.btnOpenSettings.addEventListener('click', () => toggleDrawer(true));
  dom.btnCloseSettings.addEventListener('click', () => toggleDrawer(false));
  dom.settingsOverlay.addEventListener('click', () => toggleDrawer(false));
  
  dom.btnSaveSettings.addEventListener('click', () => {
    state.apiKey = dom.inputApiKey.value.trim();
    state.profileName = dom.inputProfileName.value.trim();
    state.profileHeadline = dom.inputProfileHeadline.value.trim();
    state.profileAvatar = dom.inputProfileAvatar.value.trim();
    state.profileVerified = dom.inputProfileVerified.checked;
    
    localStorage.setItem('cs_api_key', state.apiKey);
    localStorage.setItem('cs_profile_name', state.profileName);
    localStorage.setItem('cs_profile_headline', state.profileHeadline);
    localStorage.setItem('cs_profile_avatar', state.profileAvatar);
    localStorage.setItem('cs_profile_verified', state.profileVerified);
    
    dom.previewName.textContent = state.profileName || 'Professional Writer';
    dom.previewHeadline.textContent = state.profileHeadline || 'Product Builder';
    updateAvatar(state.profileAvatar);
    toggleVerifiedBadge(state.profileVerified);
    
    toggleDrawer(false);
  });
  
  // View Switcher & Landing CTAs
  function switchViewMode(mode) {
    if (mode === 'landing') {
      dom.btnViewLanding.classList.add('active');
      dom.btnViewApp.classList.remove('active');
      dom.landingHeroView.classList.add('active');
      dom.appWorkspaceView.classList.remove('active');
    } else {
      dom.btnViewApp.classList.add('active');
      dom.btnViewLanding.classList.remove('active');
      dom.appWorkspaceView.classList.add('active');
      dom.landingHeroView.classList.remove('active');
    }
  }

  dom.btnViewLanding.addEventListener('click', () => switchViewMode('landing'));
  dom.btnViewApp.addEventListener('click', () => switchViewMode('app'));
  if (dom.btnHeroLaunch) dom.btnHeroLaunch.addEventListener('click', () => switchViewMode('app'));
  if (dom.btnBottomLaunch) dom.btnBottomLaunch.addEventListener('click', () => switchViewMode('app'));

  // FAQ Accordion Toggle
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      if (answer) {
        answer.classList.toggle('open');
        if (icon) icon.textContent = answer.classList.contains('open') ? '−' : '+';
      }
    });
  });

  // Tab Navigation Listeners
  dom.tabBtnDashboard.addEventListener('click', () => switchTab('dashboard'));
  dom.tabBtnPreview.addEventListener('click', () => switchTab('preview'));
  dom.tabBtnDiff.addEventListener('click', () => switchTab('diff'));
  dom.tabBtnCarousel.addEventListener('click', () => switchTab('carousel'));
  dom.tabBtnGuide.addEventListener('click', () => switchTab('guide'));

  // Carousel Controls
  dom.carouselThemeSelect.addEventListener('change', renderCurrentSlide);
  dom.carouselTitleInput.addEventListener('input', renderCurrentSlide);
  dom.carouselWatermarkInput.addEventListener('input', renderCurrentSlide);
  dom.btnPrevSlide.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      renderCurrentSlide();
    }
  });
  dom.btnNextSlide.addEventListener('click', () => {
    if (currentSlideIndex < carouselSlides.length - 1) {
      currentSlideIndex++;
      renderCurrentSlide();
    }
  });
  dom.btnExportPdf.addEventListener('click', exportCarouselPdf);

  // Hook Vault Controls
  dom.btnOpenHooks.addEventListener('click', () => toggleHooksModal(true));
  dom.btnCloseHooks.addEventListener('click', () => toggleHooksModal(false));
  dom.hooksModalOverlay.addEventListener('click', () => toggleHooksModal(false));
  
  document.querySelectorAll('.vault-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.vault-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentVaultCategory = btn.getAttribute('data-vcat');
      renderVaultItems();
    });
  });
  
  dom.vaultSearchInput.addEventListener('input', renderVaultItems);

  // Drafts Drawer Controls
  dom.btnOpenDrafts.addEventListener('click', () => toggleDraftsDrawer(true));
  dom.btnCloseDrafts.addEventListener('click', () => toggleDraftsDrawer(false));
  dom.draftsDrawerOverlay.addEventListener('click', () => toggleDraftsDrawer(false));
  dom.btnNewDraft.addEventListener('click', () => {
    dom.rawInput.value = '';
    state.formattedPost = '';
    dom.rawInput.dispatchEvent(new Event('input'));
    toggleDraftsDrawer(false);
  });
  dom.btnSaveDraft.addEventListener('click', saveCurrentDraft);
  dom.btnExportDrafts.addEventListener('click', exportAllDrafts);

  // Live input handler with auto-save & diff update
  dom.rawInput.addEventListener('input', () => {
    const text = dom.rawInput.value;
    calculateStats(text);
    analyzeCringe(text);
    renderDiffView(text, state.formattedPost || text);
    updateCarouselSlides(state.formattedPost || text);
  });

  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const presetKey = chip.getAttribute('data-preset');
      if (PRESETS[presetKey]) {
        dom.rawInput.value = PRESETS[presetKey];
        dom.rawInput.dispatchEvent(new Event('input'));
      }
    });
  });
  
  dom.previewSeeMore.addEventListener('click', () => {
    dom.previewPostBody.classList.toggle('collapsed');
    if (dom.previewPostBody.classList.contains('collapsed')) {
      dom.previewSeeMore.textContent = '...see more';
    } else {
      dom.previewSeeMore.textContent = 'Show less';
    }
  });

  dom.btnShield.addEventListener('click', refactorPost);
  
  setupCopyHandler();
  setupToolbarHandlers();
  setupLikeHandler();
}

function init() {
  initConfig();
  setupEventListeners();
  calculateStats('');
  analyzeCringe(''); // Initial gauge setup
  updateDraftCountBadge();
  console.log('CringeShield 2.0 Ultimate Engine Initialized!');
}

document.addEventListener('DOMContentLoaded', init);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  init();
}
