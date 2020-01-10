using System;

namespace TextMaker
{
	[Serializable]
	public class Project
	{
		public string Name { get; set; }

		public TextItemGroup[] Groups { get; set; }

		public bool IsDateSelected { get; set; }

		public bool iIsAutomaticallyCopied { get; set; }
	}
}
