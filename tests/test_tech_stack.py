import re
from playwright.sync_api import Page, expect

def test_tech_stack_section_is_visible(page: Page):
    # Navigate to the page with a project that has a tech stack
    page.goto("http://localhost:8000/cards_indiv.html?id=job-skills")

    # Check for the tech stack container
    tech_stack_container = page.locator("#tech-stack-container")
    expect(tech_stack_container).to_be_visible()

    # Check for the heading
    heading = tech_stack_container.locator("h3")
    expect(heading).to_be_visible()
    expect(heading).to_have_text("Tech Stack")

    # Check for the list container (which is a div)
    list_container = tech_stack_container.locator("div.flex.flex-wrap")
    expect(list_container).to_be_visible()

    # Check for at least one list item (which is also a div)
    first_item = list_container.locator("div").first
    expect(first_item).to_be_visible()

    # Take a screenshot for visual verification
    page.screenshot(path="/home/jules/verification/verification.png")
