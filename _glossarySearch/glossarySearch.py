import argparse
import re

def exclude_image_tags(text):
    # Define the regular expression pattern to find 'Image Source'
    pattern = r'Image Source:.*'
    # Use re.sub to replace all occurrences of the pattern with an empty string
    return re.sub(pattern, '', text)

def count_word_occurrences(glossary_file, text_file):
    # Read the list of words from the first file
    with open(glossary_file, 'r') as f:
        glossary = [word.strip() for word in f.readlines()]

    # Read the text document
    with open(text_file, 'r') as f:
        text = f.read()

    # Exclude content after 'Image Source'
    text = exclude_image_tags(text)

    # Create a regex pattern to match whole words
    word_pattern = r'\b(?:' + '|'.join(re.escape(word.lower()) for word in glossary) + r')\b'

    # Find and count occurrences of each word
    word_count = {}
    for match in re.finditer(word_pattern, text.lower()):
        word = match.group(0)
        word_count[word] = word_count.get(word, 0) + 1

    return word_count

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Count occurrences of glossary terms case-insensitively in a text document to assist with adding tooltips.')
    parser.add_argument('glossary_file', help='Path to the glossary file containing the list of words (this can be multi-words as well).')
    parser.add_argument('text_file', help='Path to the text document. The Markdown file can be dragged directly into the terminal window, or the localhost version can be saved to a file and used.')

    args = parser.parse_args()

    word_occurrences = count_word_occurrences(args.glossary_file, args.text_file)

    # Print the results
    for word, count in word_occurrences.items():
        print(f"{word}: {count}")
print(f"\nTooltip guidelines:\n- Check the context of these matches; they may not be applicable!\n- Don't add tooltips to headings, image text and URLs.\n- If the glossary item already has a direct link, don't add a tooltip (this can be added to the next occurence).\n- If the same glossary item occurs more than once in a single paragraph, only add a tooltip for the first instance.")
text = '{{< glossary_link display="TERM_TO_DISPLAY" id="YML_NAME" >}}'
print(f"Glossary Template: {text}")
