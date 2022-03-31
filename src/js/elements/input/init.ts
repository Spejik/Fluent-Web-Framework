import { attributesToString } from "../../util/html";

export default () => {
	// Input text
	const inputsText = document.querySelectorAll<HTMLInputElement>("input[type=\"text\"]");

	inputsText.forEach(inputText => {
		inputText.outerHTML = `<div class="fluent-textbox-container"><input ${attributesToString(inputText)} ><button class="fluent-clear-text-input-button">x</button></div>`;
	});

	const inputsTextNew = document.querySelectorAll<HTMLInputElement>("input[type=\"text\"]");

	inputsTextNew.forEach(inputText => {
		if (inputText.hasAttribute("clear_btn")) {
			const lastChild = inputText.parentElement?.lastElementChild as HTMLElement;
			lastChild.style.opacity = "1";
			lastChild.style.display = "inline";
		}

		inputText.parentElement?.lastElementChild?.addEventListener("click", () => {
			inputText.value = "";
			setTimeout(() => inputText.focus());
		});
	});

	// Input password
	const inputsPassword = document.querySelectorAll<HTMLInputElement>("input[type=\"password\"]");

	inputsPassword.forEach(inputPassword => {
		inputPassword.outerHTML = `<div class="fluent-textbox-container"><input ${attributesToString(inputPassword)}><a class="fluent-show-password-input" style="opacity: 0; display: none;"><svg style="margin-top: 0.425em;" width="20" height="20" viewBox="0 0 20 20"xmlns="http://www.w3.org/2000/svg"><path class="fluent-svg-path" d="M3.25909 11.6021C3.94254 8.32689 6.79437 6 10 6C13.2057 6 16.0574 8.32688 16.7409 11.6021C16.7974 11.8725 17.0622 12.0459 17.3325 11.9895C17.6029 11.933 17.7763 11.6682 17.7199 11.3979C16.9425 7.67312 13.6934 5 10 5C6.3066 5 3.05742 7.67311 2.28017 11.3979C2.22377 11.6682 2.39718 11.933 2.6675 11.9895C2.93782 12.0459 3.20268 11.8725 3.25909 11.6021ZM10 8C8.067 8 6.5 9.567 6.5 11.5C6.5 13.433 8.067 15 10 15C11.933 15 13.5 13.433 13.5 11.5C13.5 9.567 11.933 8 10 8ZM7.5 11.5C7.5 10.1193 8.61929 9 10 9C11.3807 9 12.5 10.1193 12.5 11.5C12.5 12.8807 11.3807 14 10 14C8.61929 14 7.5 12.8807 7.5 11.5Z" fill="#212121"/></svg></a></div>`;
	});

	const inputsPasswordNew = document.querySelectorAll<HTMLInputElement>("input[type=\"password\"]");

	inputsPasswordNew.forEach(inputPassword => {
		const button = inputPassword.parentElement?.lastElementChild as HTMLElement;

		if (inputPassword.hasAttribute("showpass_btn")) {
			button.style.opacity = "1";
			button.style.display = "inline";
		}

		if (inputPassword.hasAttribute("showpass")) {
			inputPassword.setAttribute("type", "text");
			button.innerHTML = "<svg style=\"margin-top: 0.425em;\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path class=\"fluent-svg-path\" d=\"M3.25909 11.6021C3.94254 8.32689 6.79437 6 10 6C13.2057 6 16.0574 8.32688 16.7409 11.6021C16.7974 11.8725 17.0622 12.0459 17.3325 11.9895C17.6029 11.933 17.7763 11.6682 17.7199 11.3979C16.9425 7.67312 13.6934 5 10 5C6.3066 5 3.05742 7.67311 2.28017 11.3979C2.22377 11.6682 2.39718 11.933 2.6675 11.9895C2.93782 12.0459 3.20268 11.8725 3.25909 11.6021ZM9.98953 8C11.9225 8 13.4895 9.567 13.4895 11.5C13.4895 13.433 11.9225 15 9.98953 15C8.05653 15 6.48953 13.433 6.48953 11.5C6.48953 9.567 8.05653 8 9.98953 8Z\" fill=\"#212121\"/></svg>";
		}
		else {
			inputPassword.setAttribute("type", "password");
			button.innerHTML = "<svg style=\"margin-top: 0.425em;\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"xmlns=\"http://www.w3.org/2000/svg\"><path class=\"fluent-svg-path\" d=\"M3.25909 11.6021C3.94254 8.32689 6.79437 6 10 6C13.2057 6 16.0574 8.32688 16.7409 11.6021C16.7974 11.8725 17.0622 12.0459 17.3325 11.9895C17.6029 11.933 17.7763 11.6682 17.7199 11.3979C16.9425 7.67312 13.6934 5 10 5C6.3066 5 3.05742 7.67311 2.28017 11.3979C2.22377 11.6682 2.39718 11.933 2.6675 11.9895C2.93782 12.0459 3.20268 11.8725 3.25909 11.6021ZM10 8C8.067 8 6.5 9.567 6.5 11.5C6.5 13.433 8.067 15 10 15C11.933 15 13.5 13.433 13.5 11.5C13.5 9.567 11.933 8 10 8ZM7.5 11.5C7.5 10.1193 8.61929 9 10 9C11.3807 9 12.5 10.1193 12.5 11.5C12.5 12.8807 11.3807 14 10 14C8.61929 14 7.5 12.8807 7.5 11.5Z\" fill=\"#212121\"/></svg>";
		}

		button.addEventListener("click", () => {
			if (inputPassword.getAttribute("type") == "password" && !inputPassword.hasAttribute("showpass")) {
				inputPassword.setAttribute("type", "text");
				inputPassword.setAttribute("showpass", "");
				button.innerHTML = "<svg style=\"margin-top: 0.425em;\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path class=\"fluent-svg-path\" d=\"M3.25909 11.6021C3.94254 8.32689 6.79437 6 10 6C13.2057 6 16.0574 8.32688 16.7409 11.6021C16.7974 11.8725 17.0622 12.0459 17.3325 11.9895C17.6029 11.933 17.7763 11.6682 17.7199 11.3979C16.9425 7.67312 13.6934 5 10 5C6.3066 5 3.05742 7.67311 2.28017 11.3979C2.22377 11.6682 2.39718 11.933 2.6675 11.9895C2.93782 12.0459 3.20268 11.8725 3.25909 11.6021ZM9.98953 8C11.9225 8 13.4895 9.567 13.4895 11.5C13.4895 13.433 11.9225 15 9.98953 15C8.05653 15 6.48953 13.433 6.48953 11.5C6.48953 9.567 8.05653 8 9.98953 8Z\" fill=\"#212121\"/></svg>";
			}
			else {
				inputPassword.setAttribute("type", "password");
				inputPassword.removeAttribute("showpass");
				button.innerHTML = "<svg style=\"margin-top: 0.425em;\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"xmlns=\"http://www.w3.org/2000/svg\"><path class=\"fluent-svg-path\" d=\"M3.25909 11.6021C3.94254 8.32689 6.79437 6 10 6C13.2057 6 16.0574 8.32688 16.7409 11.6021C16.7974 11.8725 17.0622 12.0459 17.3325 11.9895C17.6029 11.933 17.7763 11.6682 17.7199 11.3979C16.9425 7.67312 13.6934 5 10 5C6.3066 5 3.05742 7.67311 2.28017 11.3979C2.22377 11.6682 2.39718 11.933 2.6675 11.9895C2.93782 12.0459 3.20268 11.8725 3.25909 11.6021ZM10 8C8.067 8 6.5 9.567 6.5 11.5C6.5 13.433 8.067 15 10 15C11.933 15 13.5 13.433 13.5 11.5C13.5 9.567 11.933 8 10 8ZM7.5 11.5C7.5 10.1193 8.61929 9 10 9C11.3807 9 12.5 10.1193 12.5 11.5C12.5 12.8807 11.3807 14 10 14C8.61929 14 7.5 12.8807 7.5 11.5Z\" fill=\"#212121\"/></svg>";
			}
		});
	});
};
