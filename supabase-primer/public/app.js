// Initialize the supabase client

const { createClient } = supabase;

const supaUrl = "https://uhkfcqrcysetoahttxum.supabase.co";
const supaAnonKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoa2ZjcXJjeXNldG9haHR0eHVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0MTA2NjQsImV4cCI6MTk4OTk4NjY2NH0.0k_eQdNly0PtbzJklxNt0YbI0HB8-EoL9gwlNPetIEQ";

const supaClient = createClient(supaUrl, supaAnonKey);
// HTML Elements

const loginButton = document.getElementById("signInBtn");

//Event Listeners

// Event Listeners

// alert("Finished rendering");

loginButton.addEventListener("click", () => {
	alert("I was clicked");
});
