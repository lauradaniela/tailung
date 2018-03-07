require 'rails_helper'

RSpec.describe "Task management", type: :feature do
  # Tasks have a uniq description
  # Tasks cannot have a negative priority

  scenario "Creating a new task" do
    #Given a user visits the page for creating a new task
    visit new_task_path

    #  And enters the description
    fill_in 'Description', with: 'Mow the lawn'

    #  And enters the priority
    fill_in 'Priority', with: 1

    #When the submit button is clicked
    click_on 'Submit'

    #Then a new task is created
    expect(Task.count).to eq 1

    #  And the users is redirected to the list of tasks
    expect(current_path).to eq tasks_path

    #  And a successful message is rendered
    expect(page).to have_content("Task created successfuly")
  end

end
