class TasksController < ApplicationController
  def new
    render component: 'tasks/new', props: {}
  end
end
