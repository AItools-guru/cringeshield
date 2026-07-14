import './style.css';

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
  
  tabBtnDashboard: document.getElementById('tab-btn-dashboard'),
  tabBtnPreview: document.getElementById('tab-btn-preview'),
  tabContentDashboard: document.getElementById('tab-content-dashboard'),
  tabContentPreview: document.getElementById('tab-content-preview'),
  
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
  
  // Document Stats elements
  statWords: document.getElementById('stat-words'),
  statChars: document.getElementById('stat-chars'),
  statReadtime: document.getElementById('stat-readtime'),
  
  // Quick format toolbar buttons
  btnToolSpace: document.getElementById('btn-tool-space'),
  btnToolLists: document.getElementById('btn-tool-lists'),
  btnToolDebuzz: document.getElementById('btn-tool-debuzz'),
  btnToolClear: document.getElementById('btn-tool-clear'),
  
  // Interactive preview buttons
  btnPreviewLike: document.getElementById('btn-preview-like'),
  previewLikesCount: document.getElementById('preview-likes-count')
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
  if (tabId === 'dashboard') {
    dom.tabBtnDashboard.classList.add('active');
    dom.tabBtnPreview.classList.remove('active');
    dom.tabContentDashboard.classList.add('active');
    dom.tabContentPreview.classList.remove('active');
  } else {
    dom.tabBtnDashboard.classList.remove('active');
    dom.tabBtnPreview.classList.add('active');
    dom.tabContentDashboard.classList.remove('active');
    dom.tabContentPreview.classList.add('active');
  }
}

// Stats & Telemetry Calculator
function calculateStats(text) {
  const charCount = text.length;
  const words = text.trim().split(/\s+/).filter(w => w.length > 0);
  const wordCount = words.length;
  
  // Assume average reading speed of 200 WPM
  const readTimeSeconds = Math.ceil((wordCount / 200) * 60);
  
  dom.statWords.textContent = wordCount;
  dom.statChars.textContent = charCount;
  dom.statReadtime.textContent = charCount > 0 ? readTimeSeconds : 0;
  
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
  
  if (constraints.spacing) {
    cleaned = runLocalAutoSpace(cleaned);
  }
  if (constraints.buzzwords) {
    cleaned = runLocalDeBuzz(cleaned);
  }
  if (constraints.hyphens) {
    cleaned = runLocalCleanLists(cleaned);
  }
  if (constraints.hashtags) {
    const hashtags = cleaned.match(/#[a-zA-Z0-9_]+/g) || [];
    cleaned = cleaned.replace(/#[a-zA-Z0-9_]+/g, '');
    const defaultTags = ['#building', '#product', '#engineering'];
    const chosenTags = hashtags.slice(0, 3).length >= 2 ? hashtags.slice(0, 3) : defaultTags;
    cleaned = cleaned.trim() + '\n\n' + chosenTags.join(' ');
  }

  let header = "Here is our product check outline:";
  let footer = "Let's build.";

  if (formula === 'pas') {
    header = "The primary bottleneck in most development cycles is alignment.";
    footer = "Try setting clear timelines and see how workflow speeds up.";
  } else if (formula === 'aida') {
    header = "Teams spend hours trying to sync up every week.";
    footer = "Let's make alignment sessions faster.";
  } else if (formula === 'contrarian') {
    header = "Aligning your team is actually wasting their time.";
    footer = "Give developers requirements instead of meetings.";
  }

  const lines = cleaned.split('\n').filter(l => l.trim().length > 0);
  const formattedLines = [
    header,
    ...lines.slice(0, 4),
    footer
  ];

  return formattedLines.join('\n\n');
}

// Preset matching fallback
function runSimulatorRefactor(text, formula, tone) {
  let detectedPreset = 'meeting';
  
  if (text.includes('notification') || text.includes('pub-sub')) {
    detectedPreset = 'spec';
  } else if (text.includes('rejected') || text.includes('interview')) {
    detectedPreset = 'rejected';
  } else if (text.includes('thrilled to announce') || text.includes('launch')) {
    detectedPreset = 'launch';
  } else if (text.includes('Crushing') || text.includes('Tuesday') || text.includes('alignment')) {
    detectedPreset = 'meeting';
  }

  const presetResults = SIMULATED_OUTPUTS[detectedPreset];
  if (presetResults) {
    const selectedForm = presetResults[formula] ? formula : Object.keys(presetResults)[0];
    const toneResults = presetResults[selectedForm];
    if (toneResults) {
      const selectedTone = toneResults[tone] ? tone : Object.keys(toneResults)[0];
      return toneResults[selectedTone];
    }
  }

  const constraints = {
    buzzwords: dom.checkBuzzwords.checked,
    hyphens: dom.checkHyphens.checked,
    spacing: dom.checkSpacing.checked,
    hashtags: dom.checkHashtags.checked
  };
  return fallbackLocalRefactor(text, formula, tone, constraints);
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
    
    if (state.apiKey) {
      outputText = await callGeminiApi(inputText, formula, tone, constraints);
    } else {
      console.log('API Key not set. Running in Simulator Mode...');
      await new Promise(resolve => setTimeout(resolve, 1200));
      outputText = runSimulatorRefactor(inputText, formula, tone);
    }

    state.formattedPost = outputText;
    dom.previewPostBody.textContent = outputText;
    
    // Switch to preview
    switchTab('preview');
    calculateSeeMore();
    
    // Evaluate clean score
    analyzeCringe(outputText);

  } catch (error) {
    console.error('Error shielding post:', error);
    alert(`Shielding failed: ${error.message}. Running Simulator fallback...`);
    const outputText = runSimulatorRefactor(inputText, formula, tone);
    state.formattedPost = outputText;
    dom.previewPostBody.textContent = outputText;
    switchTab('preview');
    calculateSeeMore();
    analyzeCringe(outputText);
  } finally {
    dom.loaderOverlay.classList.remove('active');
  }
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
  // 1. Auto-Space
  dom.btnToolSpace.addEventListener('click', () => {
    const txt = dom.rawInput.value;
    if (txt) {
      dom.rawInput.value = runLocalAutoSpace(txt);
      dom.rawInput.dispatchEvent(new Event('input'));
    }
  });

  // 2. Clean Lists
  dom.btnToolLists.addEventListener('click', () => {
    const txt = dom.rawInput.value;
    if (txt) {
      dom.rawInput.value = runLocalCleanLists(txt);
      dom.rawInput.dispatchEvent(new Event('input'));
    }
  });

  // 3. De-Buzz
  dom.btnToolDebuzz.addEventListener('click', () => {
    const txt = dom.rawInput.value;
    if (txt) {
      dom.rawInput.value = runLocalDeBuzz(txt);
      dom.rawInput.dispatchEvent(new Event('input'));
    }
  });

  // 4. Clear
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
  
  dom.tabBtnDashboard.addEventListener('click', () => switchTab('dashboard'));
  dom.tabBtnPreview.addEventListener('click', () => switchTab('preview'));
  
  dom.rawInput.addEventListener('input', () => {
    const text = dom.rawInput.value;
    calculateStats(text);
    analyzeCringe(text);
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
  console.log('CringeShield 2.0 Engine & Telemetry Initialized!');
}

document.addEventListener('DOMContentLoaded', init);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  init();
}
