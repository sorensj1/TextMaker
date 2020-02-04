using System;
using System.IO;
using System.Runtime.Serialization;
using System.Xml;

namespace TextMaker
{
	/// <summary>
	/// A class encapsulating a settings file.
	/// </summary>
	public class FileStore<T> where T : class
	{
		#region Non-Public Data Members

		private DataContractSerializer _serializer = new DataContractSerializer(typeof(T));

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
			if (!File.Exists(FileName))
			{
				return null;
			}

			try
			{
				using (FileStream stream = new FileStream(FileName, FileMode.Open, FileAccess.Read))
				{
					return _serializer.ReadObject(stream) as T;
				}
			}
			catch (XmlException)
			{
				return null;
			}
		}

		/// <summary>
		/// Save all settings.
		/// </summary>
		public void Set(T data)
		{
			using (FileStream stream = new FileStream(FileName, FileMode.OpenOrCreate, FileAccess.Write))
			{
				_serializer.WriteObject(stream, data);
			}
		}

		/// <summary>
		/// Gets the name of the settings file.
		/// </summary>
		public string FileName { get; private set; }

		#endregion
	}
}
