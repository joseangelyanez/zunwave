using System;
using System.Linq;
using Dataflip;
using System.Collections.Generic;

namespace Zunwave.Data
{
	public class Context : DataflipContext
	{
		public Context(DataflipSettings settings)
		: 
		base(settings)
		{}

		public Context()
		: 
		base("Context")
		{}

		#region Result Classes
		public class GetActivitiesResult
		{
			public Int32? ActivityId { get; set; } 
			public String Content { get; set; } 
			public String ActivityType { get; set; } 
			public String ActivityImage { get; set; } 
			public DateTime? CreatedDate { get; set; } 
			public String Audience { get; set; } 
			public String SomeCoolDescription { get; set; } 
			public String Name { get; set; } 
			public String SmallImageUrl { get; set; } 
			public String LargeImageUrl { get; set; } 
		}

		#endregion


		#region GetActivities
		public class GetActivitiesParameters
		{
			public String Name { get; set; } 
		}
		///<summary>
		///Gets all the activities
		///</summary>
		public IEnumerable<GetActivitiesResult> GetActivities(GetActivitiesParameters parameters)
		{
			return new SqlQuery(Settings).ExecuteObjectArray(
				query : "GetActivities",
				parameters : _ =>
				{
					if (parameters == null) return;

					_.AddWithValue("@Name", parameters.Name);
				},
				mapping: reader => new GetActivitiesResult()
				{
					ActivityId = reader["ActivityId"] as Int32?,
					Content = reader["Content"] as String,
					ActivityType = reader["ActivityType"] as String,
					ActivityImage = reader["ActivityImage"] as String,
					CreatedDate = reader["CreatedDate"] as DateTime?,
					Audience = reader["Audience"] as String,
					SomeCoolDescription = reader["SomeCoolDescription"] as String,
					Name = reader["Name"] as String,
					SmallImageUrl = reader["SmallImageUrl"] as String,
					LargeImageUrl = reader["LargeImageUrl"] as String
				}
			);
		}
		#endregion

		#region CreateActivity
		public class CreateActivityParameters
		{
			public Int32? UserId { get; set; } 
			public String Content { get; set; } 
			public String ActivityType { get; set; } 
			public String ActivityImage { get; set; } 
		}
		public int CreateActivity(CreateActivityParameters parameters)
		{
			return new SqlQuery(Settings).ExecuteNonQuery(
				query : "CreateActivity",
				parameters : _ =>
				{
					if (parameters == null) return;

					_.AddWithValue("@UserId", parameters.UserId);
					_.AddWithValue("@Content", parameters.Content);
					_.AddWithValue("@ActivityType", parameters.ActivityType);
					_.AddWithValue("@ActivityImage", parameters.ActivityImage);
				}
			);
		}
		#endregion

	}
}
