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

	export class GetBooks_Result
	{
		appUserId : number ;
		bookId : number ;
		title : string ;
		author : string ;
		comment : string ;
	}
	export class GetBooks_Parameters
	{
		appUserId : number ;
	}

	export class GetArticles_Result
	{
		articleId : number ;
		appUserId : number ;
		title : string ;
		shortDescription : string ;
		content : string ;
	}
	export class GetArticles_Parameters
	{
		appUserId : number ;
	}

	export class GetCodeProjects_Result
	{
		projectId : number ;
		appUserId : number ;
		url : string ;
		name : string ;
		description : string ;
		projectType : string ;
	}
	export class GetCodeProjects_Parameters
	{
		appUserId : number ;
	}

	export class CreateCodeProject_Result
	{
		/* Method returns a basic type. */
	}
	export class CreateCodeProject_Parameters
	{
		appUserId : number ;
		url : string ;
		name : string ;
		description : string ;
		projectType : string ;
	}

	export class CreateBook_Result
	{
		/* Method returns a basic type. */
	}
	export class CreateBook_Parameters
	{
		appUserId : number ;
		title : string ;
		author : string ;
		comment : string ;
	}

	export class CreateArticle_Result
	{
		/* Method returns a basic type. */
	}
	export class CreateArticle_Parameters
	{
		appUserId : number ;
		title : string ;
		shortDescription : string ;
		content : string ;
	}

	export class GetSocialNetworks_Result
	{
		socialNetworkId : number ;
		name : string ;
		smallIcon : string ;
		url : string ;
	}
	export class GetSocialNetworks_Parameters
	{
		appUserId : number ;
	}

	export class GetTechnologies_Result
	{
		technologyId : number ;
		name : string ;
		type : string ;
	}
	export class GetTechnologies_Parameters
	{
		appUserId : number ;
	}

	export class GetAppUser_Result
	{
		appUserId : number ;
		email : string ;
		name : string ;
		profileImageUrl : string ;
		username : string ;
	}
	export class GetAppUser_Parameters
	{
		appUserId : number ;
	}

	export class CreateAppUser_Result
	{
		/* Method returns a basic type. */
	}
	export class CreateAppUser_Parameters
	{
		email : string ;
		name : string ;
	}

}
