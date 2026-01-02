# Retrospective: KNIME Architect Project Refinement

**Date**: 2026-01-02
**Topic**: Refining "The KNIME Architect" Case Study Narrative and Visuals

## Problem
The initial draft of the "The KNIME Architect" project entry needed refinement to be more accessible to a non-technical ("layman") audience. Specific issues included:
*   Use of potential jargon (e.g., "financial XML pipeline").
*   A "failure" state description that felt too personal/blaming ("dependent on specific individuals").
*   A success metric that didn't forcefully simpler the impact ("hours to seconds").
*   Visual presentation issues: The project image was rendered in grayscale by default (due to a global CSS filter), diminishing the impact of the complex workflow diagram.
*   Hardcoded "CASE STUDY #001" labels in the HTML templates meant all projects showed the same ID.

## Cause
*   **Narrative**: The initial draft was written with a slightly more technical or "insider" tone.
*   **Visuals**: The `cards_indiv.html` and `cards_indiv_de.html` templates had a default `grayscale` class on images to create a uniform aesthetic, which didn't suit the detailed workflow diagram.
*   **Code**: The case study numbering was hardcoded in the JavaScript logic within the HTML files.

## Attempted Fixes
*   **Narrative Adjustments**:
    *   Changed "financial XML pipeline" to "robust XML pipeline" to broaden appeal.
    *   Changed "impossible" issues to "complex" issues to sound more professional.
    *   Simplified the "AI Vision" explanation using a "Smart System vs. Blind System" analogy.
*   **Visual Adjustments**:
    *   Initially tried removing the grayscale class globally, but the user requested a "case-by-case" approach.
    *   **Solution**: Added a `grayscale: false` property to the project data object in `projects_indiv.js` / `_de.js`.
    *   Updated HTML templates to conditionally apply `grayscale group-hover:grayscale-20` only if the project step's `grayscale` property is NOT explicitly `false`.

## Solution/Lesson
*   **Dynamic Styling**: For portfolio items, flexibility is key. Implementing a data-driven style override (like `grayscale: false`) allows for curating the look of specific projects without breaking the overall design system.
*   **Dynamic Content**: Hardcoded values (like Case Study numbers) should always be dynamic from the start. We implemented logic to calculate the Index + 1.
*   **Layman Translation**: Technical achievements need to be translated into "Business Value" (Time/Money saved, Risk reduced) to land with a general audience. The "Hours to Seconds" metric is the strongest hook.
