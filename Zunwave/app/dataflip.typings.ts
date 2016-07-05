export namespace Context
{
	export class GetActivities_Result
	{
		activityId : number ;
		content : string ;
		activityType : string ;
		activityImage : string ;
		createdDate : Date ;
		audience : string ;
		someCoolDescription : string ;
		name : string ;
		smallImageUrl : string ;
		largeImageUrl : string ;
	}
	export class GetActivities_Parameters
	{
		name : string ;
	}

	export class CreateActivity_Result
	{
		/* Method returns a basic type. */
	}
	export class CreateActivity_Parameters
	{
		userId : number ;
		content : string ;
		activityType : string ;
		activityImage : string ;
	}

}
