"use client";

import { useState } from "react";
import styled from "styled-components";

const RoadmapContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000;
  color: #fff;
  padding: 5rem 2rem 2rem 2rem; /* Account for fixed toolbar */
  font-family: "Montserrat", sans-serif;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  color: #dcdcdc;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem auto;
`;

const PhaseSection = styled.div`
  margin-bottom: 2rem;
  border: 1px solid #fff;
  border-radius: 8px;
  overflow: hidden;
`;

const PhaseHeader = styled.div`
  background: #1a1a1a;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background: #333;
  }
`;

const PhaseTitle = styled.h2`
  font-size: 1.8rem;
  margin: 0;
`;

const ToggleIcon = styled.span`
  font-size: 1.5rem;
`;

const PhaseContent = styled.div<{ isOpen: boolean }>`
  padding: ${({ isOpen }) => (isOpen ? "1rem" : "0")};
  height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
  overflow: hidden;
  background: #000;
`;

const MilestoneCard = styled.div`
  background: #111;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
`;

const MilestoneHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const MilestoneTitle = styled.h3`
  font-size: 1.4rem;
  color: #fff;
  margin: 0;
`;

const MilestoneToggleIcon = styled.span`
  font-size: 1.2rem;
  color: #dcdcdc;
`;

const MilestoneDescription = styled.p`
  font-size: 1rem;
  color: #dcdcdc;
  line-height: 1.5;
  margin: 0 0 0.5rem 0;
`;

const MilestoneExpandedContent = styled.div<{ isOpen: boolean }>`
  padding: ${({ isOpen }) => (isOpen ? "0.5rem 0" : "0")};
  height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
  overflow: hidden;
`;

const MilestoneExpandedDescription = styled.div`
  font-size: 1rem;
  color: #dcdcdc;
  line-height: 1.5;
  margin: 0;
`;

const ExpandedText = styled.p`
  margin: 0.5rem 0;
`;

const ExpandedList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0.5rem 0;
`;

const ExpandedListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const HighlightedText = styled.span`
  background-color: #fff;
  color: #000;
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
  font-weight: 600;
`;

const Roadmap = () => {
  const [openPhases, setOpenPhases] = useState<{ [key: number]: boolean }>({
    0: true, // Phase 0 open by default
  });

  const [openMilestones, setOpenMilestones] = useState<{ [key: string]: boolean }>({});

  const togglePhase = (phaseIndex: number) => {
    setOpenPhases((prev) => ({
      ...prev,
      [phaseIndex]: !prev[phaseIndex],
    }));
  };

  const toggleMilestone = (milestoneKey: string) => {
    setOpenMilestones((prev) => ({
      ...prev,
      [milestoneKey]: !prev[milestoneKey],
    }));
  };

  const phases = [
    {
      title: "Phase 0: Getting Started with Music Production",
      milestones: [
        {
          title: "Your First Steps in Music Theory",
          description:
            "Learn the essentials of music theory to kickstart your journey, focusing on notes, scales, and rhythm.",
          expandedDescription: (
            <>
              <ExpandedText>
                This phase introduces you to the building blocks of music theory, ensuring you have a solid foundation to create music with confidence.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Key Concepts:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Notes:</strong> Understand pitch and frequency, such as C4 (261 Hz) and A4 (440 Hz), and how they form the basis of melodies.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Scales:</strong> Explore major and minor scales, like C major (C-D-E-F-G-A-B) for a happy tone and A minor (A-B-C-D-E-F-G) for a sadder feel.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Rhythm:</strong> Grasp time signatures like 4/4 (four beats per measure) and 3/4 (waltz rhythm) to create structured beats.
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Practical Example:</HighlightedText> Try playing a C major scale on a keyboard or in Logic Pro X’s piano roll to hear how the notes flow together, then experiment with a 4/4 rhythm by tapping out a simple beat.
              </ExpandedText>
            </>
          ),
        },
        {
          title: "Introduction to Logic Pro X",
          description:
            "Get familiar with Logic Pro X’s interface and basic tools to start creating music.",
          expandedDescription: (
            <>
              <ExpandedText>
                This phase helps you navigate Logic Pro X, setting you up to produce your first tracks with ease.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Key Features:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Tracks Area:</strong> Learn to add and arrange tracks, such as a synth or drum track, to build your song.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Piano Roll:</strong> Use the piano roll to input notes, like programming a simple melody with C-D-E.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Library:</strong> Access built-in sounds, such as a piano or drum kit, to start experimenting.
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Practical Example:</HighlightedText> Open Logic Pro X, create a new project, add a software instrument track, and use the piano roll to play a C major scale. Then, explore the Library to find a drum kit and add a basic 4/4 beat.
              </ExpandedText>
            </>
          ),
        },
        {
          title: "Exam: Foundations of Music Production",
          description:
            "Test your understanding of music theory basics and Logic Pro X navigation.",
          expandedDescription: (
            <>
              <ExpandedText>
                This exam ensures you’ve grasped the foundational skills needed to move forward in your music production journey.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Focus:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Music Theory:</strong> Identify notes (e.g., what is the frequency of A4?), scales (e.g., list the notes in C major), and time signatures (e.g., what does 4/4 mean?).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Logic Pro X:</strong> Navigate the interface (e.g., how to add a track), use the piano roll (e.g., input a C-D-E melody), and access sounds from the Library.
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Benefits:</HighlightedText> By passing this exam, you’ll confirm your ability to understand basic music theory and navigate Logic Pro X, setting a strong foundation for creating your own music.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Example Questions:</HighlightedText> What notes make up an A minor scale? How do you add a drum track in Logic Pro X? Explain the difference between 4/4 and 3/4 time signatures.
              </ExpandedText>
            </>
          ),
        },
      ],
    },
    {
      title: "Phase 1: Building Your Foundation",
      milestones: [
        {
          title: "Exploring Music Theory Basics",
          description:
            "Dive into the essentials of music theory with lessons on notes, scales, and rhythm to build a strong foundation.",
          expandedDescription: (
            <>
              <ExpandedText>
                This phase equips you with the core music theory knowledge needed to create structured and expressive music.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Key Concepts:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Notes and Intervals:</strong> Learn to identify notes on a keyboard (e.g., C4, A4) and understand intervals like a perfect fifth (e.g., C to G).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Scales and Modes:</strong> Explore scales like C major and A minor, and modes like Dorian (e.g., D-E-F-G-A-B-C) for unique moods.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Rhythm and Time Signatures:</strong> Understand time signatures (e.g., 4/4, 3/4, 6/8) and rhythmic patterns (e.g., quarter notes, eighth notes).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Chords:</strong> Build basic chords like C major (C-E-G) and A minor (A-C-E), and learn their emotional impact.
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Practical Example:</HighlightedText> In Logic Pro X, program a simple melody using the C major scale, then add a 4/4 drum beat with quarter and eighth notes to create a rhythmic foundation. Experiment with a C major to A minor chord progression to feel the emotional shift.
              </ExpandedText>
            </>
          ),
        },
        {
          title: "Introduction to Logic Pro X",
          description:
            "Get familiar with Logic Pro X’s interface and tools to start producing music.",
          expandedDescription: (
            <>
              <ExpandedText>
                This phase helps you navigate Logic Pro X’s core features, setting you up to create your first tracks with confidence.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Key Features:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Tracks Area:</strong> Add and arrange tracks, such as a synth for melodies or an audio track for vocals.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Piano Roll:</strong> Input notes to create melodies or drum patterns (e.g., C1 for kicks, D1 for snares).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Library:</strong> Access presets like pianos, synths, and drum kits to experiment with sounds.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Basic Editing:</strong> Trim and adjust clips, such as shortening a vocal take or aligning a drum hit.
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Practical Example:</HighlightedText> Create a new project in Logic Pro X, add a synth track, and use the piano roll to program a C-D-E-F melody. Then, add a drum track from the Library, program a 4/4 beat, and trim the clips to fit a 4-bar loop.
              </ExpandedText>
            </>
          ),
        },
        {
          title: "A Clean, Focused Design",
          description:
            "Melodex features a sleek black-and-white theme with hero sections on each page, making it easy for you to dive into the content without clutter.",
          expandedDescription: (
            <>
              <ExpandedText>
                The design ensures you can focus on learning music theory, sound design, and Logic Pro X without distractions.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Design Benefits:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Minimalist Theme:</strong> The black-and-white color scheme reduces visual noise, helping you concentrate on the content.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Hero Sections:</strong> Each page starts with a visually engaging hero section to draw you into the topic.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Consistent Layout:</strong> A uniform layout across pages makes navigation intuitive, so you can easily move between topics.
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Practical Example:</HighlightedText> When you visit the Basics page, the hero section introduces music theory with a clear visual, and the minimalist design ensures you can focus on learning about scales without distractions.
              </ExpandedText>
            </>
          ),
        },
        {
          title: "Exam: Foundational Knowledge",
          description:
            "Assess your grasp of music theory basics and Logic Pro X navigation.",
          expandedDescription: (
            <>
              <ExpandedText>
                This exam ensures you’ve mastered the foundational skills needed to progress in your music production journey.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Focus:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Music Theory:</strong> Identify notes (e.g., what is the frequency of A4?), scales (e.g., list the notes in C major), and time signatures (e.g., what does 4/4 mean?).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Logic Pro X:</strong> Navigate the interface (e.g., how to add a track), use the piano roll (e.g., input a C-D-E melody), and access sounds from the Library.
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Benefits:</HighlightedText> By passing this exam, you’ll confirm your ability to understand basic music theory and navigate Logic Pro X, setting a strong foundation for creating your own music.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Example Questions:</HighlightedText> What notes make up an A minor scale? How do you add a drum track in Logic Pro X? Explain the difference between 4/4 and 3/4 time signatures.
              </ExpandedText>
            </>
          ),
        },
      ],
    },
    {
      title: "Phase 2: Deepening Your Knowledge",
      milestones: [
        {
          title: "Music Theory Made Simple",
          description:
            "Dive into detailed lessons on notes, rhythm, chords, scales, dynamics, intervals, timbre, notation, and articulation, with examples you can try in Logic Pro X.",
          expandedDescription: (
            <>
              <ExpandedText>
                This phase provides a comprehensive understanding of music theory, equipping you with the tools to create expressive and structured music.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Key Concepts:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Notes and Intervals:</strong> Identify notes on a piano roll (e.g., C4, A4) and understand intervals like a major third (e.g., C to E) or perfect fifth (e.g., C to G).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Scales and Modes:</strong> Explore major and minor scales, as well as modes like Dorian (e.g., D-E-F-G-A-B-C) and Mixolydian (e.g., G-A-B-C-D-E-F) for unique tonal flavors.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Rhythm and Time Signatures:</strong> Master time signatures (e.g., 4/4, 3/4, 6/8) and rhythmic patterns (e.g., quarter notes, eighth notes, syncopation).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Chords and Harmony:</strong> Build triads (e.g., C major: C-E-G) and seventh chords (e.g., G7: G-B-D-F), and learn chord progressions like I-IV-V-I (e.g., C-F-G-C).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Dynamics and Articulation:</strong> Apply dynamics (e.g., pp to ff) and articulation (e.g., staccato, legato) to add emotion to your melodies.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Timbre and Notation:</strong> Understand timbre (e.g., bright vs. warm sounds) and read basic notation (e.g., quarter notes, rests).
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Practical Example:</HighlightedText> In Logic Pro X, program a melody using the A minor scale, add a 6/8 drum beat with syncopated eighth notes, and use a C major to F major chord progression. Adjust the MIDI velocity to create a dynamic swell, and apply staccato articulation to a synth lead for a punchy effect.
              </ExpandedText>
            </>
          ),
        },
        {
          title: "Sound Design Essentials",
          description:
            "Learn how to create sounds from scratch, covering waveforms, synthesis, effects, sampling, and layering, with practical tips to get you started.",
          expandedDescription: (
            <>
              <ExpandedText>
                This phase equips you with the skills to design unique sounds that stand out in your tracks, using Logic Pro X tools.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Key Techniques:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Waveforms:</strong> Understand the characteristics of sine (smooth), sawtooth (gritty), square (hollow), and triangle (soft) waves.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Synthesis:</strong> Explore subtractive synthesis (e.g., using filters to shape a sawtooth wave), FM synthesis (e.g., creating metallic tones), and wavetable synthesis (e.g., morphing waveforms in Alchemy).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Effects:</strong> Apply reverb (e.g., for space), delay (e.g., for echoes), distortion (e.g., for grit), and chorus (e.g., for width) to enhance your sounds.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Sampling:</strong> Turn a sound (e.g., a vocal snippet) into a playable instrument using Logic Pro X’s Sampler.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Layering:</strong> Combine sounds (e.g., a kick with a sub-bass) to create richer, more impactful tones.
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Practical Example:</HighlightedText> In Logic Pro X, use ES2 to create a bass with a sawtooth wave, apply a low-pass filter to cut highs, and add a touch of distortion for grit. Then, layer it with a sub-bass sine wave, add a short delay for depth, and use reverb to give it space, creating a powerful bass sound for an EDM track.
              </ExpandedText>
            </>
          ),
        },
        {
          title: "Logic Pro X Skills",
          description:
            "Master Logic Pro X with guides on its interface, MIDI programming, editing, recording, automation, and mixing.",
          expandedDescription: (
            <>
              <ExpandedText>
                This phase helps you become proficient in Logic Pro X, giving you the tools to turn your ideas into polished tracks.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Key Skills:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Interface Navigation:</strong> Navigate the Tracks Area, Mixer, and Smart Controls to manage your project efficiently.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>MIDI Programming:</strong> Use the piano roll to program melodies (e.g., C-D-E-F) and drum patterns (e.g., C1 for kicks, D1 for snares).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Editing:</strong> Trim, quantize, and adjust clips (e.g., fix timing on a drum hit, shorten a vocal take).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Recording:</strong> Record live instruments (e.g., a guitar riff) with proper input levels to avoid clipping.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Automation:</strong> Automate parameters like volume (e.g., fade out) or filter cutoff (e.g., for a build-up).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Mixing:</strong> Balance levels, pan instruments (e.g., guitars left, synths right), and apply EQ and compression for clarity.
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Practical Example:</HighlightedText> In Logic Pro X, create a project with a synth track, program a melody in the piano roll, and add a drum pattern. Record a guitar riff, edit it to fix timing, automate a filter sweep for a build-up, and mix the track by panning the guitar left, synth right, and applying EQ to the drums.
              </ExpandedText>
            </>
          ),
        },
        {
          title: "Exam: Core Concepts",
          description:
            "Test your understanding of music theory, sound design, and Logic Pro X skills.",
          expandedDescription: (
            <>
              <ExpandedText>
                This exam ensures you’ve mastered the core concepts needed to create music with confidence.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Focus:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Music Theory:</strong> Identify scales (e.g., what notes are in A minor?), chords (e.g., what notes make up C major?), and time signatures (e.g., explain 6/8).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Sound Design:</strong> Create a synth patch (e.g., a bass with a sawtooth wave), apply effects (e.g., reverb for space), and layer sounds (e.g., kick with sub-bass).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Logic Pro X:</strong> Program MIDI (e.g., a drum pattern), record audio (e.g., a guitar riff), automate effects (e.g., a filter sweep), and mix tracks (e.g., panning).
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Benefits:</HighlightedText> By passing this exam, you’ll confirm your ability to apply music theory, design sounds, and use Logic Pro X effectively, preparing you for more advanced techniques.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Example Questions:</HighlightedText> What is the difference between a major and minor scale? How do you create a bass sound using subtractive synthesis? Describe the steps to record and edit a vocal in Logic Pro X.
              </ExpandedText>
            </>
          ),
        },
      ],
    },
    {
      title: "Phase 3: Making Learning Interactive",
      milestones: [
        {
          title: "Exploring Sound Design Techniques",
          description:
            "Dive deeper into sound design with subpages on synthesis techniques, effects, sampling, and layering.",
          expandedDescription: (
            <>
              <ExpandedText>
                This phase provides in-depth guides to help you master sound design, with practical examples and tutorials.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Key Techniques:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Synthesis Techniques:</strong> Learn subtractive synthesis (e.g., shaping a sawtooth wave with a filter), FM synthesis (e.g., creating metallic tones), and wavetable synthesis (e.g., morphing waveforms in Alchemy).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Effects:</strong> Apply distortion (e.g., adding grit to a bass), chorus (e.g., widening a synth), flanger (e.g., for a sweeping effect), and phaser (e.g., for a swirling sound).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Sampling:</strong> Use Logic Pro X’s Sampler to turn sounds (e.g., a vocal snippet, a field recording) into playable instruments.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Layering:</strong> Combine sounds for depth (e.g., layering a kick with a sub-bass, a synth lead with a pad).
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Practical Example:</HighlightedText> In Logic Pro X, use Alchemy to create a pad with wavetable synthesis, apply a flanger effect for movement, sample a vocal to create a playable instrument, and layer the pad with a soft sine wave for warmth.
              </ExpandedText>
            </>
          ),
        },
        {
          title: "Advanced Logic Pro X Workflows",
          description:
            "Learn advanced Logic Pro X workflows for MIDI programming, recording, automation, and mixing.",
          expandedDescription: (
            <>
              <ExpandedText>
                This phase helps you master advanced Logic Pro X techniques to create professional tracks.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Key Workflows:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>MIDI Programming:</strong> Use advanced MIDI techniques, like CC messages (e.g., CC1 for modulation), to add expression to your tracks.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Recording:</strong> Set up a vocal chain with EQ and compression, record multiple takes, and comp the best parts.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Automation:</strong> Automate effects (e.g., a filter sweep), volume (e.g., a fade-out), and panning (e.g., a stereo sweep) for dynamic movement.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Mixing:</strong> Use EQ to cut overlapping frequencies (e.g., bass vs. kick), apply compression (e.g., 4:1 ratio on drums), and add reverb for depth.
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Practical Example:</HighlightedText> In Logic Pro X, program a MIDI melody with modulation, record a vocal with a condenser mic, comp the best takes, automate a filter sweep for a build-up, and mix the track by EQing the bass and adding reverb to the vocal.
              </ExpandedText>
            </>
          ),
        },
        {
          title: "Exam: Interactive Learning",
          description:
            "Test your ability to apply sound design and Logic Pro X skills.",
          expandedDescription: (
            <>
              <ExpandedText>
                This exam ensures you can use advanced sound design and Logic Pro X techniques effectively.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Focus:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Sound Design:</strong> Create a synth patch (e.g., a pad with wavetable synthesis), apply effects (e.g., chorus for width), and layer sounds (e.g., a vocal sample with a synth).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Logic Pro X:</strong> Program MIDI with expression (e.g., using CC1), record and comp vocals, automate effects (e.g., a filter sweep), and mix tracks (e.g., EQing and compressing).
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Benefits:</HighlightedText> By passing this exam, you’ll confirm your ability to design unique sounds and use Logic Pro X workflows to create professional tracks.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Example Questions:</HighlightedText> How do you create a pad using wavetable synthesis? What steps do you take to record and comp a vocal? Describe how to automate a filter sweep in Logic Pro X.
              </ExpandedText>
            </>
          ),
        },
      ],
    },
    {
      title: "Phase 4: Enhancing Your Skills",
      milestones: [
        {
          title: "Quick Access with Index",
          description:
            "Use the Index page for a compact overview of all topics, with a sidebar to jump between sections like sound waves, MIDI tips, and mixing techniques.",
          expandedDescription: (
            <>
              <ExpandedText>
                The Index page is your go-to resource for quick reference, covering a wide range of music production topics.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Key Topics:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Sound Waves:</strong> Understand waveforms (e.g., sine, sawtooth) and their properties (e.g., frequency, amplitude).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>MIDI Tips:</strong> Learn MIDI programming techniques (e.g., using CC messages, quantizing notes).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Mixing Techniques:</strong> Apply EQ (e.g., cutting lows on vocals), compression (e.g., on drums), and panning (e.g., guitars left, synths right).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Mastering:</strong> Use a limiter (e.g., to reach -1 dB) and EQ (e.g., boost 10 kHz for air) to polish your tracks.
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Practical Example:</HighlightedText> On the Index page, jump to the mixing section to learn how to EQ a vocal (e.g., cut below 100 Hz), then visit the MIDI section to program a drum pattern, and finally check the mastering section to apply a limiter to your final mix.
              </ExpandedText>
            </>
          ),
        },
        {
          title: "Advanced Sound Design",
          description:
            "Master advanced sound design techniques like FM synthesis, granular synthesis, and creative effects.",
          expandedDescription: (
            <>
              <ExpandedText>
                This phase helps you create complex, unique sounds to elevate your tracks.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Key Techniques:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>FM Synthesis:</strong> Create metallic or bell-like tones by modulating frequencies (e.g., using ES2 in Logic Pro X).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Granular Synthesis:</strong> Break sounds into grains for glitchy effects (e.g., using Alchemy to granulate a vocal).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Creative Effects:</strong> Use reverse (e.g., for transitions), pitch shifting (e.g., vocal up an octave), and glitch effects (e.g., stutter) for unique textures.
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Practical Example:</HighlightedText> In Logic Pro X, use ES2 to create a metallic lead with FM synthesis, apply granular synthesis in Alchemy to a vocal sample for a glitchy effect, and add a reverse cymbal with pitch shifting for a dramatic transition.
              </ExpandedText>
            </>
          ),
        },
        {
          title: "Exam: Advanced Skills",
          description:
            "Test your ability to apply advanced sound design and Logic Pro X techniques.",
          expandedDescription: (
            <>
              <ExpandedText>
                This exam ensures you can use advanced techniques to create professional tracks.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Focus:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Sound Design:</strong> Create a sound using FM synthesis (e.g., a metallic lead), apply granular synthesis (e.g., to a vocal), and use creative effects (e.g., reverse cymbal).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Logic Pro X:</strong> Use advanced MIDI (e.g., CC messages), record and edit audio (e.g., comping vocals), automate effects (e.g., a filter sweep), and mix tracks (e.g., EQing and compressing).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Index Usage:</strong> Navigate the Index to find specific topics (e.g., mixing techniques, MIDI tips) and apply them to a project.
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Benefits:</HighlightedText> By passing this exam, you’ll confirm your ability to design complex sounds, use Logic Pro X proficiently, and leverage the Index for quick reference.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Example Questions:</HighlightedText> How do you create a metallic lead using FM synthesis? What steps do you take to apply granular synthesis to a vocal? How do you use the Index to find EQ tips for mixing?
              </ExpandedText>
            </>
          ),
        },
      ],
    },
    {
      title: "Phase 5: Mastering Your Craft",
      milestones: [
        {
          title: "Mixing and Mastering Techniques",
          description:
            "Learn professional mixing and mastering techniques to polish your tracks.",
          expandedDescription: (
            <>
              <ExpandedText>
                This phase equips you with the skills to create professional-sounding tracks through advanced mixing and mastering.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Key Techniques:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Mixing:</strong> Balance levels (e.g., kick loud, vocals clear), pan instruments (e.g., guitars left, synths right), apply EQ (e.g., cut lows on vocals), and use compression (e.g., 4:1 on drums).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Effects in Mixing:</strong> Add reverb (e.g., for depth), delay (e.g., for echoes), and stereo widening (e.g., for a wider mix).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Mastering:</strong> Use a limiter (e.g., to reach -1 dB), EQ (e.g., boost 10 kHz for air), and stereo imaging (e.g., to enhance width) to polish your track.
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Practical Example:</HighlightedText> In Logic Pro X, mix a track by EQing the bass to cut below 30 Hz, compressing the drums with a 4:1 ratio, panning guitars left and right, and adding reverb to vocals. Then, master the track by applying a limiter to reach -1 dB, boosting 10 kHz for air, and using stereo imaging to widen the mix.
              </ExpandedText>
            </>
          ),
        },
        {
          title: "Test Your Skills with Exams",
          description:
            "Challenge yourself with interactive exams to test your music production knowledge at every phase.",
          expandedDescription: (
            <>
              <ExpandedText>
                These exams help you track your progress and master key concepts across all phases of your learning journey.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Exam Structure:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Phase-Specific Exams:</strong> Each phase includes an exam tailored to its content, testing your understanding of music theory, sound design, Logic Pro X, and more.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Comprehensive Final Exam:</strong> The final exam in this phase covers all topics, ensuring you’ve mastered the full scope of your learning.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Feedback:</strong> Receive detailed feedback after each exam, highlighting strengths and areas for improvement to guide your growth.
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Practical Example:</HighlightedText> After completing the Phase 2 exam on music theory and sound design, you’ll get feedback on your ability to identify scales and create a synth patch, helping you focus on areas like chord progressions or FM synthesis for improvement.
              </ExpandedText>
            </>
          ),
        },
        {
          title: "Advanced Music Theory",
          description:
            "Explore advanced music theory concepts like modes, chord progressions, and counterpoint.",
          expandedDescription: (
            <>
              <ExpandedText>
                This phase helps you create more complex and expressive music with advanced music theory techniques.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Key Concepts:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Modes:</strong> Use modes like Dorian (e.g., D-E-F-G-A-B-C) and Mixolydian (e.g., G-A-B-C-D-E-F) for unique tonal flavors.
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Chord Progressions:</strong> Create advanced progressions like ii-V-I (e.g., Dm7-G7-Cmaj7) or modal progressions (e.g., i-IV in Dorian).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Counterpoint:</strong> Write independent melodies that harmonize (e.g., a melody in C major with a counter-melody in A minor).
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Practical Example:</HighlightedText> In Logic Pro X, create a melody in D Dorian, add a ii-V-I progression (Em7-A7-Dm7), and write a counter-melody in the bassline to harmonize with the main melody, creating a rich, layered composition.
              </ExpandedText>
            </>
          ),
        },
        {
          title: "Exam: Comprehensive Mastery",
          description:
            "Put your skills to the test with a final exam covering everything you’ve learned.",
          expandedDescription: (
            <>
              <ExpandedText>
                This final exam ensures you’ve mastered all the skills needed to produce professional tracks.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Focus:</HighlightedText>
              </ExpandedText>
              <ExpandedList>
                <ExpandedListItem>
                  <strong>Music Theory:</strong> Identify modes (e.g., what notes are in D Dorian?), create chord progressions (e.g., ii-V-I), and write counterpoint (e.g., harmonizing melodies).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Sound Design:</strong> Create a sound using FM synthesis (e.g., a metallic lead), apply granular synthesis (e.g., to a vocal), and use creative effects (e.g., reverse cymbal).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Logic Pro X:</strong> Use advanced MIDI (e.g., CC messages), record and edit audio (e.g., comping vocals), automate effects (e.g., a filter sweep), and mix/master tracks (e.g., EQing, limiting).
                </ExpandedListItem>
                <ExpandedListItem>
                  <strong>Index Usage:</strong> Navigate the Index to find specific topics (e.g., mixing techniques, MIDI tips) and apply them to a project.
                </ExpandedListItem>
              </ExpandedList>
              <ExpandedText>
                <HighlightedText>Benefits:</HighlightedText> By passing this exam, you’ll confirm your ability to create professional tracks, from composing and designing sounds to mixing and mastering.
              </ExpandedText>
              <ExpandedText>
                <HighlightedText>Example Questions:</HighlightedText> What is the difference between Dorian and Mixolydian modes? How do you create a glitchy vocal effect using granular synthesis? Describe the steps to mix and master a track in Logic Pro X.
              </ExpandedText>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <RoadmapContainer>
      <Title>Melodex Roadmap</Title>
      <IntroText>
        Discover your music production journey with this Roadmap, guiding you from the basics to mastering your craft. Each phase outlines key skills, techniques, and exams to help you grow as a producer. Toggle each phase to explore your path to creating music you love!
      </IntroText>
      {phases.map((phase, index) => (
        <PhaseSection key={index}>
          <PhaseHeader onClick={() => togglePhase(index)}>
            <PhaseTitle>{phase.title}</PhaseTitle>
            <ToggleIcon>{openPhases[index] ? "−" : "+"}</ToggleIcon>
          </PhaseHeader>
          <PhaseContent isOpen={!!openPhases[index]}>
            {phase.milestones.map((milestone, i) => {
              const milestoneKey = `${index}-${i}`; // Unique key for each milestone
              return (
                <MilestoneCard key={i}>
                  <MilestoneHeader onClick={() => toggleMilestone(milestoneKey)}>
                    <MilestoneTitle>{milestone.title}</MilestoneTitle>
                    <MilestoneToggleIcon>{openMilestones[milestoneKey] ? "−" : "+"}</MilestoneToggleIcon>
                  </MilestoneHeader>
                  <MilestoneDescription>{milestone.description}</MilestoneDescription>
                  <MilestoneExpandedContent isOpen={!!openMilestones[milestoneKey]}>
                    <MilestoneExpandedDescription>
                      {milestone.expandedDescription}
                    </MilestoneExpandedDescription>
                  </MilestoneExpandedContent>
                </MilestoneCard>
              );
            })}
          </PhaseContent>
        </PhaseSection>
      ))}
    </RoadmapContainer>
  );
};

export default Roadmap;