package com.app.dto;

public class CustomerResponseDTO {
	private int id;
	private String username;
	private String email;
	private String token;
	public CustomerResponseDTO() {
		// TODO Auto-generated constructor stub
	}
	
	
	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getToken() {
		return token;
	}


	public void setToken(String token) {
		this.token = token;
	}


	public String getName() {
		return username;
	}
	public void setName(String name) {
		this.username = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public CustomerResponseDTO(int id, String name, String email) {
		super();
		this.id = id;
		this.username = name;
		this.email = email;
		
	}
	
	
	public CustomerResponseDTO(int id, String username, String email, String token) {
		this.id = id;
		this.username = username;
		this.email = email;
		
		this.token = token;
	}
	
	
	@Override
	public String toString() {
		return "CustomerResponse [name=" + username + ", email=" + email + "]";
	}
	
	

}
