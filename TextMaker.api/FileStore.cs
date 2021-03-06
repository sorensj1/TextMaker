﻿using System;
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

			using FileStream stream = new FileStream(FileName, FileMode.Open, FileAccess.Read);
			using XmlTextReader reader = new XmlTextReader(stream);
			return _serializer.ReadObject(reader) as T;
		}

		/// <summary>
		/// Save all settings.
		/// </summary>
		public void Set(T data)
		{
			using FileStream stream = new FileStream(FileName, FileMode.OpenOrCreate, FileAccess.Write);
			stream.SetLength(0);
			using XmlWriter writer = XmlWriter.Create(stream, new XmlWriterSettings() { Indent = true });
			_serializer.WriteObject(writer, data);

		}

		/// <summary>
		/// Gets the name of the settings file.
		/// </summary>
		public string FileName { get; private set; }

		#endregion
	}
}
