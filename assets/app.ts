import { registerReactControllerComponents } from '@symfony/ux-react';
import './style.scss';
import './bootstrap';

registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));
