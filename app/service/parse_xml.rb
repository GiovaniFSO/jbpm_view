class ParseXml

  def read
    json_fluxo = Hash.from_xml(File.open("#{Rails.root}/app/service/file.xml"))
    json_fluxo.each do |json|
      json.each do |j|
        next if j == 'process_definition'
        return j
      end
    end
  end
end
