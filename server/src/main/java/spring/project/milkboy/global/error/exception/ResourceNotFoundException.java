package spring.project.milkboy.global.error.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import spring.project.milkboy.global.error.CustomException;
import spring.project.milkboy.global.error.ExceptionCode;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends CustomException {

    public static final CustomException EXCEPTION =
            new ResourceNotFoundException();

    public ResourceNotFoundException() {
        super(ExceptionCode.RESOURCE_NOT_FOUND);
    }
}
