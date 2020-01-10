using System;
using System.IO;
using System.Xml.Serialization;

namespace TextMaker
{
	/// <summary>
	/// A class encapsulating a settings file.
	/// </summary>
	public class FileStore<T> where T : class
	{
		#region Non-Public Data Members

		private const string BaseNodeName = @"filestore";

		private XmlSerializer _serializer = new XmlSerializer(typeof(T));

		#endregion

		#region Non-Public Properties/Methods

		#endregion

		#region Public Interface

		/// <summary>
		/// Constructor.
		/// </summary>
		public FileStore() : this(Path.Combine(Environment.CurrentDirectory, @"FileStore.xml"))
		{ }

		/// <summary>
		/// Constructor.
		/// </summary>
		/// <param name="fileName">The name of the storage file.</param>
		public FileStore(string fileName)
		{
			FileName = fileName;
		}

		public T Get()
		{
			using (FileStream stream = new FileStream(FileName, FileMode.Open, FileAccess.Read))
			{
				return _serializer.Deserialize(stream) as T;
			}
		}

		/// <summary>
		/// Save all settings.
		/// </summary>
		public void Set(T data)
		{
			using (FileStream stream = new FileStream(FileName, FileMode.OpenOrCreate, FileAccess.Write))
			{
				_serializer.Serialize(stream, data);
			}
		}

		/// <summary>
		/// Gets the name of the settings file.
		/// </summary>
		public string FileName { get; private set; }

		#endregion
	}
}
