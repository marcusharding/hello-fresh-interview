import { shallowMount } from '@vue/test-utils';
import Username from '@/components/Username';

const factory = (values = {}) => {

    return shallowMount(Username, {

        data () {
            return { ...values }
        }
    });
}

describe('Username', () => {

    it('Renders a welcome message', () => {

        const wrapper = factory();

        expect(wrapper.find('.message').text()).toEqual("Welcome to the user name example");
    });

    it('Renders an error when username is less than 7 characters', () => {

        const wrapper = factory({ username: ''  });

        expect(wrapper.find('.error').exists()).toBeTruthy();
    });

    it('Renders an error when username is whitespace', () => {

        const wrapper = factory({ username: ' '.repeat(7) });

        expect(wrapper.find('.error').exists()).toBeTruthy();
    });

    it('Does not render an error when username is 7 characters or more', () => {

        const wrapper = factory({ username: 'Marcusjh' });

        expect(wrapper.find('.error').exists()).toBeFalsy();
    });
})