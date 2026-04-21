---
layout: page_2026
title: Call for Participation
year: 2026
---

# Call for Participation
{:.sub-page-header}
&nbsp;
{:.sub-page-border}

- [Conference Information](#info)
- [Topics of Interest](#topics)
- Call for [Papers and Talks](#papers)
- Call for [Posters and Demos](#posters) (Coming Soon!)
- Call for [Doctoral Consortium](#dc) (Coming Soon!)
- Call for [Workshops](#workshops) (Coming Soon!)
- Call for [CrowdCamp](#crowdcamp) (Coming Soon!)
- [General Submission Instructions](#general)

---


<!-- SUB-NAVBAR -->
<style>
  .sticky-subnav {
    position: sticky;
    top: 75px; 
    z-index: 999;
    background: white;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08); 
    border-bottom: 1px solid #eee;
    padding: 0;
    margin-bottom: 2rem;
    
    /* Initially Hidden */
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .sticky-subnav.show-nav {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }


  .subnav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    padding: 0 15px;
  }

  /* Remove display: none to show scrollbar on mobile if needed, 
     or keep it hidden but add visual cues. 
     For now, let's keep it but ensure links don't shrink. */
  .subnav-container::-webkit-scrollbar {
    height: 3px;
  }
  .subnav-container::-webkit-scrollbar-thumb {
    background: rgba(134, 31, 65, 0.2);
    border-radius: 3px;
  }

  .subnav-link {
    padding: 15px 20px;
    color: #555;
    text-decoration: none !important;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 3px solid transparent;
    transition: all 0.3s ease;
    display: inline-block;
    flex-shrink: 0; /* Prevent links from shrinking */
  }

  .subnav-link:hover {
    color: var(--primary-color);
  }

  .subnav-link.active {
    color: var(--primary-color);
    border-bottom-color: var(--primary-color);
    background: rgba(134, 31, 65, 0.03);
  }

  @media (max-width: 768px) {
    .sticky-subnav {
      top: 55px; /* Adjust to match actual mobile navbar height */
    }
    .subnav-link {
      padding: 12px 18px;
      font-size: 0.8rem;
    }
    /* Add a subtle indicator that there is more to scroll */
    .sticky-subnav::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 40px;
      height: 100%;
      background: linear-gradient(to right, transparent, rgba(255,255,255,0.8));
      pointer-events: none;
      z-index: 10;
    }
  }
</style>

<div class="sticky-subnav">
  <div class="subnav-container" id="subnav">
    <a href="#info" class="subnav-link active">Information</a>
    <a href="#topics" class="subnav-link">Topics</a>
    <a href="#papers" class="subnav-link">Papers/Talks</a>
    <a href="#posters" class="subnav-link">Posters/Demos</a>
    <a href="#dc" class="subnav-link">Doctoral Consortium</a>
    <a href="#workshops" class="subnav-link">Workshops</a>
    <a href="#crowdcamp" class="subnav-link">CrowdCamp</a>
    <a href="#general" class="subnav-link">Submission Info</a>
  </div>
</div>

<script>
  window.addEventListener('DOMContentLoaded', () => {
    const subnav = document.querySelector('.sticky-subnav');
    const sections = document.querySelectorAll('h1[id]');
    const navLinks = document.querySelectorAll('.subnav-link');
    
    // Reveal Nav on Scroll with dynamic trigger
    const infoSection = document.querySelector('#info');
    const footer = document.querySelector('footer');
    
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const infoPos = infoSection ? infoSection.offsetTop - 150 : 300;

      if (scrollPos > infoPos) {
        subnav.classList.add('show-nav');
      } else {
        subnav.classList.remove('show-nav');
      }
    };

    window.addEventListener('scroll', () => {
      window.requestAnimationFrame(handleScroll);
    });

    // Smooth scroll override for subnav
    navLinks.forEach(link => {

      link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('href');
        const target = document.querySelector(id);
        if (target) {
          const offset = 140; // Main Nav + Sub Nav + New Padding
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = target.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    const observerOptions = {
      root: null,
      rootMargin: '-150px 0px -70% 0px', // Adjusted for slightly larger offset
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
              // Auto-scroll the subnav to keep active link visible
              link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  });
</script>



# Conference Information
{:#info}
{:.sub-page-header}
&nbsp;
{:.sub-page-border}

The [2026 ACM Conference on Human-AI Complementarity and Alignment (HCOMP)](https://www.humancomputation.com/2026/) and the [2026 ACM Collective Intelligence (CI) Conference](https://ci.acm.org/2026/) will be held as co-located events from September 27-30, 2026, at the Virginia Tech Institute for Advanced Computing near Washington, DC, USA.

## **HCOMP 2026 General Chair**<br>
Ting-Hao 'Kenneth' Huang, Penn State University

## **CI 2026 General Chair**<br>
Kurt Luther, Virginia Tech

---

# Topics of Interest
{:#topics}
{:.sub-page-header}
&nbsp;
{:.sub-page-border}

## Human-AI Complementarity and Alignment (HCOMP)

ACM HCOMP is the premier venue for disseminating the latest research findings on human-AI complementarity and alignment. Our community studies and designs systems that combine the complementary strengths of human and artificial intelligence to achieve outcomes neither could achieve alone, in ways that are ethical, safe, and intentional. This research builds on a foundation established by the HCOMP community during its first decade as an AAAI conference series focused on human computation and crowdsourcing.

HCOMP focuses on the emerging science and practice of human-AI complementarity and alignment. As AI systems become increasingly capable, the field is expanding from studying how humans contribute to building these systems to also studying how humans and AI systems work together as complementary partners. This broader perspective situates complementarity and alignment across the full lifecycle of AI systems, from how systems are built and evaluated to how they are used and governed in practice, with attention to how responsibilities are divided, how collaboration evolves over time, and how alignment is achieved and maintained in real-world use.

While artificial intelligence (AI) and human-computer interaction (HCI) represent traditional mainstays of the conference, HCOMP believes strongly in fostering and promoting broad, interdisciplinary research. Our field is particularly unique in the diversity of disciplines it draws upon and contributes to, including human-centered qualitative studies, HCI design, social computing, machine learning, natural language processing, the broader realms of artificial intelligence (including LLMs and generative AI), economics, computational social science, digital humanities, policy, and ethics. We promote the exchange of advances in human-AI complementarity and alignment not only among researchers but also engineers and practitioners, to encourage dialogue across disciplines and communities of practice.

Example topics for HCOMP include, but are not limited to, the following:

**Research on human-AI complementarity**
*   Human-AI collaboration, coordination, and co-adaptation
*   Division of labor, delegation, and supervisory control
*   Complementarity versus redundancy in human-AI systems
*   Hybrid workflows that combine human and AI strengths
*   Human-AI decision-making and problem solving
*   Human-AI interaction in organizational and societal settings

**Research on human-centered alignment**
*   Alignment in training and in use
*   Trust, reliance, and calibration
*   Scalable human oversight
*   Steering, monitoring, and control of AI systems
*   Detecting, communicating, and repairing misalignment
*   Governance, accountability, and safety in human-AI systems

**Research on human contributions to AI systems**
*   Crowdsourcing and human computation
*   Human feedback, preference learning, and evaluation
*   Data collection, annotation, and quality assurance
*   Bias, fairness, and responsible data practices
*   Human roles in the development, assessment, and governance of AI systems

### **HCOMP 2026 Program Co-Chairs**<br>
Chien-Ju Ho, Washington University in St. Louis<br>
Tianyi Li, Purdue University

## Collective Intelligence (CI)

ACM Collective Intelligence is the premier venue for disseminating the latest research that advances the theoretical and empirical understanding of collective performance in diverse systems, whether biological, technological, or a combination. We are interested in research on a broad range of systems that vary in scale and scope and focus on implications for a diverse range of social, ecological, and economic outcomes.

CI has a transdisciplinary focus devoted to advancing the theoretical and empirical understanding of collective intelligence, broadly designed. The community does basic science on emergent collective phenomena, as well as designing and engineering systems for combining computational and human intelligence. We are interested in research on a broad range of phenomena that vary in scale and scope with implications for a diverse range of social, ecological, and economic outcomes.

Researchers who participate in the CI conference represent a wide and growing cross-section of social science and computer science as well the natural sciences, arts, and humanities. All types of contributions—empirical, conceptual, theoretical, quantitative, and qualitative—are welcome, including computational models.

Topics include (but are not limited to) research that helps us to explain the mechanisms of emergent behavior as well as presentations of design solutions and systems engineering.

Research on collective behaviors including, but not limited to:
*   Crowds, flocks and swarms
*   Collective emotion and polarization
*   Belief formation and misinformation
*   Social network formation and functioning
*   Science and innovation
*   Open source communities
*   Organizational Studies

Research into systems and tasks to support the following, but not limited to:
*   Forecasting and decision-making
*   Democracy, civics and policymaking
*   Complex problem solving
*   Crisis response
*   Community-driven design
*   Innovation contests
*   Citizen science
*   Discussion moderation and decision facilitation
*   Computer-human collaboration (e.g. hybrid systems, LLMs)

### **CI 2026 Program Co-Chairs**<br>
Jason W. Burton, University of Copenhagen<br>
Ioanna Lykourentzou, Utrecht University

---

# Call for Papers and Talks
{:#papers}
{:.sub-page-header}
&nbsp;
{:.sub-page-border}

## Important Dates

*   **Abstracts due:** June 1, 2026 AoE
*   **Papers due:** June 8, 2026 AoE
*   **Notifications:** July 31, 2026
*   **Camera ready due:** August 13, 2026

---

## Submission Options

The two primary submission formats—full papers and talks (formerly called "extended abstracts")—are intended to accommodate the different norms and requirements across the diverse fields represented in the HCOMP and Collective Intelligence communities. Submissions will be selected for inclusion based on their quality and the fit of their topic with the interests of the HCOMP and CI audiences. The key differences between formats (see below) relate to the amount of feedback authors will receive and opportunities for inclusion in archival conference proceedings.

*   **Full papers (max 6000 words)** will be assigned to a Program Committee member who will recruit 3 external reviewers and write a meta-review. Reviewers will be instructed to write full reviews that evaluate submissions according to specific review criteria. Accepted full papers will be published in the archival 2026 ACM HCOMP or Collective Intelligence conference proceedings which will be available via the ACM Digital Library. These papers will be assigned individual digital object identifiers (DOIs) as citable publications. *Note: authors submitting to the full papers track are expected to collectively review at least 3 papers subject to submission volumes and PC member availability.*

*   **Talks (formerly "extended abstracts") (max 1500 words)** will receive short reviews by two members of the Program Committee focusing on relevance of, and enthusiasm for, the topic. Extended abstracts for accepted talks will be made available to conference participants on the 2026 HCOMP or CI websites. These abstracts will not be archived in the ACM Digital Library nor assigned individual DOIs for tracking future citations. This option may be attractive to social science researchers who wish to submit their work to a journal for archival publication in the future.

### Selecting HCOMP or CI Track

When submitting a full paper or talk, authors will be required to select either the HCOMP or CI track, based on the Topics of Interest listed above. Their track selection will determine which Program Committee (PC) reviews their submission. Additionally, for accepted full papers, the track selection will determine the proceedings (HCOMP or CI) in which the paper will be published. In rare cases, the Program Chairs may request permission from the authors to move a submission to a different track if it appears to be a better topical fit.

The submission options can be summarized in the following table:

| **Submission Option** | **Track** | **Max word count** | **Archival?** | **Review process** | **Where published** |
|---|---|---|---|---|---|
| **Full papers** | Authors select HCOMP or CI track | 6000 | Yes; must be original research not previously published | 1 PC member coordinates 3 detailed external reviews | HCOMP or CI proceedings in ACM Digital Library w/ DOI |
| **Talks** (formerly "extended abstracts") | Authors select HCOMP or CI track | 1500 | No; may be based on cited prior publications | 2 PC members provide brief reviews | PDF on conference website only (no DOI) |

---

## Submission Information for Papers and Talks

### Attendance and Presentations

Authors of accepted full papers and talks will be invited to give oral presentations at the conference. To ensure your accepted submission will be included in the conference program, at least one author of each accepted submission must register to attend the conference by the early registration deadline. Failure to do so will result in the withdrawal of the submission. In-person attendance is required as remote presentations are only allowed under exceptional circumstances.

In the submission form, authors of full papers and talks may check an option to be automatically considered for a poster or demo presentation if the submission is not accepted for an oral presentation.

### Paper, Talk, and Reviewer Awards

HCOMP and CI 2026 will each recognize one best full paper, one best talk, and one best student work (of either type). Program Committee members will be asked to flag submissions they deem worthy of a recognition. The Program Chairs will form a small committee that will read the nominated submissions, consider the comments in the reviews, and select the winners.

Additionally, HCOMP and CI 2026 will recognize outstanding reviewers. PC members will be asked to flag high-quality reviews from external reviewers and fellow PC members. The Program Chairs will acknowledge these outstanding reviewers at the conference and in the proceedings.

### Anonymity

HCOMP and CI 2026 will adopt a double-blind review process for both archival full papers and talks. Authors submitting this submission format must ensure that their submissions are fully anonymized by removing all identifying details, including author names, affiliations, and institutions. Authors should also avoid citing any unpublished work of their own.

### Supplemental Materials

Authors are invited, but not required, to include supplemental materials such as executables and data files, images, additional videos, related papers, more detailed explanations, derivations, or results, so that reviewers can reproduce results in the paper. These materials will be viewed only at the reviewers' discretion, who are only obligated to read the submitted papers.

### Double Submission Policy

**Full paper submissions** to HCOMP and CI 2026 must represent original work. Submissions should not have been previously published and should not be under simultaneous peer-review at any other peer-reviewed archival conference or journal. Papers that have appeared at a conference with published proceedings constitute previously published work. If the paper uses some data, measures, or material from previously-published work, it should also contain significant new results and/or focus on a significantly different research question. Works that have appeared at a workshop, poster/demo session, extended abstract, or any non-archival forum do not constitute previously published work, as long as the paper is an extension of the prior work. Extensions might include new results, more in-depth analysis, an evaluation that was not part of the workshop paper, or further experiments. Any submissions that fail to meet these double submission requirements will be desk rejected.

**Talk submissions** can be based on previously-published work, as long as the authors clearly cite the publications on which their submission is based. Extended abstracts for accepted talks will be non-archival and made available via the conference website, giving authors the flexibility to further develop their ideas and submit to other venues in the future.

### ACM Publication Policies

Full papers will be archived and, therefore, must adhere to ACM's publication policies. Authors hereby acknowledge that you and your co-authors are subject to all ACM Publications Policies, including the [ACM Policy on Authorship](https://www.acm.org/publications/policies/new-acm-policy-on-authorship) and [ACM's new Publications Policy on Research Involving Human Participants and Subjects](https://www.acm.org/publications/policies/research-involving-human-participants-and-subjects). Alleged violations of this policy or any ACM Publications Policy will be investigated by ACM and may result in a full retraction of your paper, in addition to other potential penalties, as per ACM Publications Policy.

Please ensure that you and your co-authors [obtain an ORCID ID](https://orcid.org/), so you can complete the publishing process for your accepted paper. ACM has been involved in ORCID from the start and we have recently made a commitment to collect ORCID IDs from all of our published authors. We are committed to improving author discoverability, ensuring proper attribution and contributing to ongoing community efforts around name normalization; your ORCID ID will help in these efforts.

### ACM Open

Full papers will be published under [ACM Open Access](https://www.acm.org/publications/openaccess).

Starting January 1, 2026, ACM will fully transition to Open Access. All ACM publications, including those from ACM-sponsored conferences, will be 100% Open Access. Authors will have two primary options for publishing Open Access articles with ACM: the ACM Open institutional model or by paying Article Processing Charges (APCs). With over 1,800 institutions already part of ACM Open, the majority of ACM-sponsored conference papers will not require APCs from authors or conferences (currently, around 70-75%).

To be included in ACM Open, the **corresponding author** must be affiliated with a participating institution. For APC-eligible articles (research, short paper, and survey) where none of the authors are currently from participating institutions, an APC will be required. Corresponding authors from institutions not participating in ACM Open will need to pay an APC to publish their papers, unless they qualify for a financial or discretionary waiver. To find out whether an APC applies to your article, please consult the [list of participating institutions](https://libraries.acm.org/subscriptions-access/acmopen) in ACM Open and review the [APC Waivers and Discounts Policy](https://www.acm.org/publications/policies/waivers-discounts-policy). Keep in mind that waivers are rare and are granted based on specific criteria set by ACM.

Understanding that this change could present financial challenges, ACM has approved a temporary subsidy for 2026 to ease the transition and allow more time for institutions to join ACM Open. The subsidy will offer:

*   $250 APC for ACM/SIG members
*   $350 for non-members

This represents a [65% discount](https://www.acm.org/publications/openaccess), funded directly by ACM. Authors are encouraged to help advocate for their institutions to join ACM Open during this transition period. This temporary subsidized pricing will apply to all conferences scheduled for 2026.

*Note: ACM is not lowering APCs, but is instead contributing funds to temporarily subsidize APC pricing as the community adjusts to the Open Access program.*

## Program Committees

The list of Program Committee (PC) members for HCOMP and CI 2026 will be available soon. The program chairs are:

### **HCOMP 2026 Program Co-Chairs**<br>
Chien-Ju Ho, Washington University in St. Louis<br>
Tianyi Li, Purdue University

### **CI 2026 Program Co-Chairs**<br>
Jason W. Burton, University of Copenhagen<br>
Ioanna Lykourentzou, Utrecht University

---

# Call for Posters and Demos
{:#posters}
{:.sub-page-header}
&nbsp;
{:.sub-page-border}

Coming soon!

---

# Call for Doctoral Consortium
{:#dc}
{:.sub-page-header}
&nbsp;
{:.sub-page-border}

Coming soon!

---

# Call for Workshops
{:#workshops}
{:.sub-page-header}
&nbsp;
{:.sub-page-border}

Coming soon!

---

# Call for CrowdCamp
{:#crowdcamp}
{:.sub-page-header}
&nbsp;
{:.sub-page-border}

Coming soon!

---

# General Submission Instructions
{:#general}
{:.sub-page-header}
&nbsp;
{:.sub-page-border}

## Submission Templates

All submissions should use one of the following templates and must be converted to PDF at the time of submission:

*   [Word Template](https://www.acm.org/binaries/content/assets/publications/taps/acm_submission_template.docx)
*   [LaTeX Template](https://portalparts.acm.org/hippo/latex_templates/acmart-primary.zip)

All authors should submit manuscripts for review in a **single column format**. For the **Word Template**, follow the embedded instructions to apply the paragraph styles to your various text elements.

To use the **LaTeX Template** within [Overleaf](https://www.overleaf.com/), select New Project → Upload Project and select the .zip file downloaded from the link above. Please use the `manuscript` document class to prepare your manuscript. On the first active line of the Code or Visual Text Editor, replace `\documentclass[sigconf]{acmart}` with `\documentclass[manuscript]{acmart}` to create a single-column format. Please review the LaTeX documentation and ACM's LaTeX best practices guide should you have any questions.

### Policy on Using Large Language Models (LLMs) for Paper Writing

In line with other SIGCHI conferences' (e.g., CHI), and computing conferences' (e.g., CVPR and KDD), HCOMP and CI 2026 employ the following policy on the use of Large Language Models in paper writing.

Text generated from a large-scale language model (LLM), such as ChatGPT, must be clearly marked where such tools are used for purposes beyond editing the author's own text. Please carefully review the [ACM Policy on Authorship](https://www.acm.org/publications/policies/new-acm-policy-on-authorship) before you use these tools. The [SIGCHI blog post](https://medium.com/sigchi/chi-2024-policy-on-using-large-language-models-9caf4a92fc6b) describes approaches to acknowledging the use of such tools and we refer to it for guidance. Note that the LaTeX template will default to hiding the Acknowledgements section while in review mode; please make sure that any LLM disclosure is available in your submitted version. We will investigate submissions brought to our attention and desk reject papers where LLM use is not clearly marked or where an LLM is not appropriately used (e.g., including fake references generated by LLM, relying on AI-tools to generate ideas in the manuscript, etc.).

### Policy on Irresponsible Reviews

ACM policies forbid the uploading of author text into an LLM or similar system. Doing so, violates the author's right to confidentiality and shares intellectual property without consent. Reviewing is a professional responsibility and violations are subject to investigation. In line with other SIGCHI conferences' (e.g., CHI) and computing conferences' (e.g., CVPR and KDD) policies on irresponsible reviews, HCOMP and CI 2026 employ the following policy on highly irresponsible reviews.

**LLMs are NOT allowed to be used for writing the reviews nor the meta-reviews at any step.** You cannot use an LLM to write your review. This is true for any LLM, whether you run it locally or use an API.

This policy includes but is not restricted to:

*   You can **NOT** ask an LLM to write content for you. The review needs to be based on your own judgment.
*   You can **NOT** share substantial content from the paper or your review with an LLM. This means, for example, that you cannot use an LLM to translate a review.
*   You **CAN** use an LLM to check the grammar of your (meta-)review.

It is also expected that reviewers will submit fair and thoughtful reviews on time. Program chairs and PC members will check (meta-)reviews for highly irresponsible reviews. If a review is flagged as "highly irresponsible," we will investigate the review. Example cases of highly irresponsible reviews include: reviews that violate the above-mentioned LLM policy, missing or one-sentence reviews, reviews not relevant to the paper or that miss a substantial portion of the paper. Highly irresponsible reviews do not include cases where reviewers merely have some misunderstandings, miss small parts of the paper, or hold a different opinion from other reviewers or the PC. **If the review is confirmed as "highly irresponsible," the papers submitted by the reviewer will be desk rejected per discretion of the program chairs.** We might also report this incident and this reviewer to the ACM.

### Preprints Policy

We do not prohibit authors from posting preprints of their work on platforms such as SSRN or arXiv either before or during review by the conference. However, to maintain the integrity of the double-blind peer review, we ask that authors refrain from publicizing the research on social media or discussing it with the press until the review process is complete. HCOMP and CI 2026 will enforce this double-blind review policy, and any submissions that fail to meet these anonymity requirements will be desk rejected.
