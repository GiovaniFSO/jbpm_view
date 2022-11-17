class HomeController < ApplicationController
  def index
    @fluxo = ParseXml.new.read
  end
end
