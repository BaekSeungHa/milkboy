package spring.project.milkboy.global.error.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import spring.project.milkboy.global.error.CustomException;
import spring.project.milkboy.global.error.ExceptionCode;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class DateParserException extends CustomException {

    public static final CustomException EXCEPTION =
            new DateParserException();

    private DateParserException() {
        super(ExceptionCode.DATE_PARSER);
    }
}
