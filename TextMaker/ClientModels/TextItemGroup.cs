using System;

namespace TextMaker
{
	[Serializable]
	public class TextItemGroup
	{
		public string Name { get; set; }

		public TextItem[] Items { get; set; }

		public bool IsExclusive { get; set; }

		public string Delimiter { get; set; }

		public bool IsOnNewLine { get; set; }
	}
}
