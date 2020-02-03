using System;

namespace TextMaker
{
	[Serializable]
	public class TextItem
	{
		public string Name { get; set; }

		public string Text { get; set; }

		public bool IsSelected { get; set; }
	}
}
