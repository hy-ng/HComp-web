# This patch fixes the "undefined method 'tainted?'" error 
# for Jekyll 3.x running on Ruby 3.2 or 3.3.

if RUBY_VERSION >= '3.2'
  [String, Object, Array, Hash].each do |klass|
    klass.class_eval do
      def tainted?; false; end
      def untaint; self; end
    end
  end
end

if RUBY_VERSION >= '3.0'
  module FileTest
    def self.exists?(file)
      File.exist?(file)
    end
  end
  class File
    def self.exists?(file)
      File.exist?(file)
    end
  end
end