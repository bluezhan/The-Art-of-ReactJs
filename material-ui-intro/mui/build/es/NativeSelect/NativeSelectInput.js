import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
/**
 * @ignore - internal component.
 */

const NativeSelectInput = React.forwardRef(function NativeSelectInput(props, ref) {
  const {
    classes,
    className,
    disabled,
    IconComponent,
    inputRef,
    variant
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["classes", "className", "disabled", "IconComponent", "inputRef", "variant"]);

  return React.createElement(React.Fragment, null, React.createElement("select", _extends({
    className: clsx(classes.root, // TODO v5: merge root and select
    classes.select, className, variant === 'filled' && classes.filled, variant === 'outlined' && classes.outlined, disabled && classes.disabled),
    disabled: disabled,
    ref: inputRef || ref
  }, other)), React.createElement(IconComponent, {
    className: classes.icon
  }));
});
process.env.NODE_ENV !== "production" ? NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * The CSS class name of the select element.
   */
  className: PropTypes.string,

  /**
   * If `true`, the select will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: PropTypes.elementType,

  /**
   * Use that property to pass a ref callback to the native select element.
   * @deprecated
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: PropTypes.string,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: PropTypes.func,

  /**
   * The input value.
   */
  value: PropTypes.any,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled'])
} : void 0;
export default NativeSelectInput;