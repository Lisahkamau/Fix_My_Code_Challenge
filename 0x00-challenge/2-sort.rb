#!/usr/bin/env ruby

# Extract command-line arguments excluding the script name
args = ARGV[1..-1]

# Sort the arguments
sorted_args = args.sort_by { |arg| arg.to_s }

# Print the sorted arguments
sorted_args.each { |arg| puts arg }

