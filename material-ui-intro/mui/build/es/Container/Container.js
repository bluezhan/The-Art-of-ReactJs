import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '../styles';
import { capitalize } from '../utils';
export const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    width: '100%',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    marginRight: 'auto',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }
  },

  /* Styles applied to the root element if `fixed={true}`. */
  fixed: Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
    const value = theme.breakpoints.values[breakpoint];

    if (value !== 0) {
      acc[theme.breakpoints.up(breakpoint)] = {
        maxWidth: value
      };
    }

    return acc;
  }, {}),

  /* Styles applied to the root element if `maxWidth="xs"`. */
  maxWidthXs: {
    [theme.breakpoints.up('xs')]: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444)
    }
  },

  /* Styles applied to the root element if `maxWidth="sm"`. */
  maxWidthSm: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: theme.breakpoints.values.sm
    }
  },

  /* Styles applied to the root element if `maxWidth="md"`. */
  maxWidthMd: {
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.values.md
    }
  },

  /* Styles applied to the root element if `maxWidth="lg"`. */
  maxWidthLg: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values.lg
    }
  },

  /* Styles applied to the root element if `maxWidth="xl"`. */
  maxWidthXl: {
    [theme.breakpoints.up('xl')]: {
      maxWidth: theme.breakpoints.values.xl
    }
  }
});
const Container = React.forwardRef(function Container(props, ref) {
  const {
    classes,
    className,
    component: Component = 'div',
    fixed = false,
    maxWidth = 'lg'
  } = props,
        other = _objectWithoutPropertiesLoose(props, ["classes", "className", "component", "fixed", "maxWidth"]);

  return React.createElement(Component, _extends({
    className: clsx(classes.root, className, fixed && classes.fixed, maxWidth !== false && classes[`maxWidth${capitalize(String(maxWidth))}`]),
    ref: ref
  }, other));
});
process.env.NODE_ENV !== "production" ? Container.propTypes = {
  children: PropTypes.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,

  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   */
  fixed: PropTypes.bool,

  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   */
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false])
} : void 0;
export default withStyles(styles, {
  name: 'MuiContainer'
})(Container);