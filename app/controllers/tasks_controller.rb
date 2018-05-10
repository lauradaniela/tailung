class TasksController < ApplicationController

  def index
    render component: 'tasks/index', props: {tasks: Task.all, notice: notice}
  end

  def show
    render component: 'tasks/show', props: {tasks: Task.all}
  end

  def new
    render component: 'tasks/new', props: Task.new
  end

  def create
    task = Task.new(task_params)
    task.save
    redirect_to tasks_path, notice: "Task created successfully"
  end

  private
  def task_params
    params.require(:task).permit(:description, :priority)
  end
end
